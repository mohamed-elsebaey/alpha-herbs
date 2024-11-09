"use server";

import { Accessibility } from "@/components/Accessibility";
import { getArticleLikeStateByUserIdArticleId, getUserIdByEmail } from "@/db/db";
import { revalidatePath } from "next/cache";

export async function addOrRemoveLikeAction(articleId: any) {
  const userEmail: any = await Accessibility();
  if(!userEmail){
    return;
  }
  const userId: any = await getUserIdByEmail(userEmail);

  const likeState = await getArticleLikeStateByUserIdArticleId(userId[0].id,articleId)

  revalidatePath("/blog")
}
