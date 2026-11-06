import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  try {
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserID: userId,
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    const user = await currentUser();
    if (!user) {
      return null;
    }

    const email = user.emailAddresses[0]?.emailAddress;
    if (!email) {
      throw new Error("The authenticated Clerk user has no email address");
    }

    const newUser = await db.user.create({
      data: {
        clerkUserID: user.id,
        name: [user.firstName, user.lastName].filter(Boolean).join(" ") || null,
        imageURL: user.imageUrl,
        email,
      },
    });

    return newUser;
  } catch (error) {
    console.error("Error synchronizing Clerk user:", error);
    throw new Error("Failed to synchronize user");
  }
};