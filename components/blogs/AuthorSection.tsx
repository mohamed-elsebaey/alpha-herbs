import { getAuthorDataById } from "@/db";
import Image from "next/image";

async function AuthorSection({ id }: { id: any }) {
  const authorData: any = await getAuthorDataById(id);
  const authorName = authorData[0].name
  const authorProfilePath = authorData[0].profilePath
  return (
    <Image
      width={120}
      height={120}
      alt="Alpha"
      src={authorProfilePath}
      className="relative inline-block h-8 w-8 rounded-full"
    />
  );
}

export default AuthorSection;
