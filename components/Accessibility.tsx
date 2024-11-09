"use server";
import { getSession } from "@/lib/lib";

export async function Accessibility() {
  const session = await getSession();
  const loginEmail = session?.user.email ? session?.user.email : false;

  return loginEmail;
}
