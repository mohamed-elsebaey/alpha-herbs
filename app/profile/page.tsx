import { Accessibility } from "@/components/Accessibility";
import Profile from "@/components/profile/Profile";
import { getUserDataFromDB } from "@/db/db";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Profile",
  description: "alpha herb ....... ",
};

async function page() {
  const ifLogin: any = await Accessibility();
  if (!ifLogin) {
    redirect("/");
  }
  const UserData : any = await getUserDataFromDB(ifLogin);
  
   
  return (
    <>
      <Profile userData={UserData}/>
    </>
  );
}

export default page;
