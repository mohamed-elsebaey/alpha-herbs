import { getNamesOfThoseWhoLikedTheArticleByBlogId } from "@/db";
import { Accessibility } from "../../Accessibility";
import HeartButton from "./HeartButton";

async function LikesSection({ id }: { id: any }) {
  const total_names: any = await getNamesOfThoseWhoLikedTheArticleByBlogId(id);
  const email: any = await Accessibility();
  
  const userIsLiked = total_names.find((user: any) => user.email === email);
  return (
    <div className="flex ">
      <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
        <HeartButton userIsLiked={userIsLiked} total_names={total_names} articleId={id} />
      </span>
      <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
        <svg
          className="h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          ></path>
        </svg>
        <span className="ml-1 flex">
          0 <span className="hidden sm:block">&nbsp;Comments</span>
        </span>
      </span>
    </div>
  );
}

export default LikesSection;
