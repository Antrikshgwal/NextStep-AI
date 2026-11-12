'use server'
import { auth } from "@clerk/nextjs/server"
import { db } from '@/lib/prisma'
import { generateAIInsights } from "./dashboard";
import { checkUser } from "@/lib/checkUser";
import { defaultIndustryInsights } from "@/lib/industry-insights";
import { after } from "next/server";
import { revalidatePath } from "next/cache";

export async function updateUser(data){
const {userId} = await auth();
if(!userId) throw new Error("Unauthorised");

const user = await db.user.findUnique({
    where:{
        clerkUserID:userId,
    }
});

if(!user){
    throw new Error("User not found");
}

try{
    let industryInsight = await db.industryInsight.findUnique({
        where: { industry: data.industry },
    });

    const shouldGenerateInsights = !industryInsight;

    const result = await db.$transaction(async (tx) => {
        industryInsight = await tx.industryInsight.upsert({
            where: { industry: data.industry },
            create: {
                industry: data.industry,
                ...defaultIndustryInsights,
                nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            },
            update: {},
        });

        const updatedUser = await tx.user.update({
            where: { id: user.id },
            data: {
                industryInsight: {
                    connect: { industry: data.industry },
                },
                Skills: data.skills,
                experience: data.experience,
                bio: data.bio,
            },
        });

        return { updatedUser, industryInsight };
    });

    if (shouldGenerateInsights) {
        after(async () => {
            try {
                const insights = await generateAIInsights(data.industry);
                await db.industryInsight.update({
                    where: { industry: data.industry },
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

return {success: true, ...result };
    }catch(error){
        console.error("Error updating user and industry", error.message);
        throw new Error("Failed to update profile"+ error.message);
    }




}



export async function getUserOnboardingStatus() {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    try {
      const user = await checkUser();

      return {
        isOnboarded: !!user?.industry,
      };
    } catch (error) {
      console.error("Error checking onboarding status:", error);
      throw new Error("Failed to check onboarding status");
    }
  }
