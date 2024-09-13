"use server";

import { addNowUser } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signUpFormAction(prevState: any, formData: FormData) {
  const email = formData.get("email")?.toString().trim() || "";
  const password = formData.get("password")?.toString().trim() || "";

  // Error handling and validation
  let errors: { email?: string; password?: string } = {};

  if (!email) {
    errors.email = "* Please enter an email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "* Please enter a valid email address.";
  } else if (password.length < 8) {
    errors.password = "* Password must be at least 8 characters long."; // Clearer message
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  // step 1 --- check if email exits or not
  // strp 2 --- if email not exits add data to mysql database

  const dbFileCallBack = await addNowUser(email, password);

  if(Object.keys(dbFileCallBack).length > 0 ){
    return  dbFileCallBack;
  }
  // revalidatePath("/sign-in");

  redirect("/sign-in");
}
