"use server";
import { logout } from "@/lib";
import { redirect } from "next/navigation";

export async function logOutAction() {
  logout();
  redirect("/");
}
