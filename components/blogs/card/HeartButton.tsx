"use client";
import { addOrRemoveLikeAction } from "@/actions/blogActions/addOrRemoveLikeAction";
import { Accessibility } from "@/components/Accessibility";
import { Heart } from "lucide-react";
import { redirect } from "next/navigation";
import { useState } from "react";

function HeartButton({
  userIsLiked,
  total_names,
  articleId,
}: {
  userIsLiked: any;
  total_names: any;
  articleId: any;
}) {
  const [liked, setLiked] = useState(userIsLiked);
  const [likesNumber, setLikesNumber] = useState(total_names.length);

  const onChangeHeartState = async () => {
    const isLogin = await Accessibility();
    if (isLogin) {
      // setLiked(() => !liked);
      // setLikesNumber(liked ? likesNumber - 1 : likesNumber + 1);
      addOrRemoveLikeAction(articleId);
    } else {

    }
  };
  return (
    <>
      <Heart
        size={18}
        className={`${liked ? "text-red-500" : ""} cursor-pointer`}
        onClick={onChangeHeartState}
      />
      <span className={`${liked ? "text-red-500" : ""} ml-1`}>
        {likesNumber}
      </span>
    </>
  );
}

export default HeartButton;
