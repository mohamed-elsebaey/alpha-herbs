"use server";
import { getSession } from "@/lib";

export async function Accessibility() {
  const session = await getSession();
  const login = session?.user.email ? true : false;

  if (login) {
    const email = session?.user.email;
    const password = session?.user.password;
  }

  return login;
}
