"use server";
import { logout } from "@/lib/lib";
import { redirect } from "next/navigation";

export async function logOutAction() {
  logout();
  redirect("/");
}
