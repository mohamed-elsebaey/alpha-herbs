"use server";

import { Accessibility } from "@/components/Accessibility";
import { addUserCommentToArticleByUserIdArticleId, getUserIdByEmail } from "@/db";
import { revalidatePath } from "next/cache";

export async function addCommentAction(prevState: any, formData: FormData) {
  const comment = formData.get("comment")?.toString() || "";

  const userEmail: any = await Accessibility();
  if (!userEmail) {
    return 1;
  }

  const userId: any = await getUserIdByEmail(userEmail);

  addUserCommentToArticleByUserIdArticleId(userId[0].id,1,comment)

  console.log(comment,userId);

  revalidatePath("/blog");

}
