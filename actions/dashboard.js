"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { generateContent } from "@/lib/gemini";
import { defaultIndustryInsights } from "@/lib/industry-insights";
import { after } from "next/server";
import { revalidatePath } from "next/cache";

export const generateAIInsights = async (industry) => {
  const prompt = `
          Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format without any additional notes or explanations:
          {
            "salaryRanges": [
              { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
            ],
            "growthRate": number,
            "demandLevel": "High" | "Medium" | "Low",
            "topSkills": ["skill1", "skill2"],
            "marketOutlook": "Positive" | "Neutral" | "Negative",
            "keyTrends": ["trend1", "trend2"],
            "recommendedSkills": ["skill1", "skill2"]
          }

          IMPORTANT: Return ONLY the JSON. No additional text, notes, or markdown formatting.
          Include at least 5 common roles for salary ranges.
          Growth rate should be a percentage.
          Include at least 5 skills and trends.
        `;

  const result = await generateContent(prompt);
  const response = result.response;
  const text = response.text();
  const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

  const insights = JSON.parse(cleanedText);

  return {
    ...insights,
    demandLevel: insights.demandLevel.toUpperCase(),
    marketOutlook: insights.marketOutlook.toUpperCase(),
  };
};

export async function getIndustryInsights() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserID: userId },
    select: { id: true, industry: true, industryInsight: true },
  });

  if (!user) throw new Error("User not found");
  if (!user.industry) throw new Error("User industry is not configured");

  const industryInsight = await db.industryInsight.upsert({
    where: { industry: user.industry },
    create: {
      industry: user.industry,
      ...defaultIndustryInsights,
      nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
    update: {},
  });

  if (!user.industryInsight) {
    await db.user.update({
      where: { id: user.id },
      data: {
        industryInsight: {
          connect: { industry: user.industry },
        },
      },
    });

    after(async () => {
      try {
        const insights = await generateAIInsights(user.industry);
        await db.industryInsight.update({
          where: { industry: user.industry },
          data: {
            ...insights,
            lastUpdated: new Date(),
            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          },
        });
        revalidatePath("/dashboard");
      } catch (error) {
        console.error("Error refreshing industry insights:", error);
      }
    });
  }

  return industryInsight;
}