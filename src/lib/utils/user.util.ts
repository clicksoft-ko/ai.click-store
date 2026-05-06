"use server";
import { auth } from "@/app/api/auth/utils/auth";
import { User } from "@/lib/interfaces/user";
import { convertSessionToUser } from "./convert.util";

export async function getJisa() {
  return (await getUser())?.jisa ?? "001";
}

export async function getUser(): Promise<User | undefined> {
  const session = await auth();
  return convertSessionToUser(session);
}

export async function isAuthenticated() {
  const session = await auth();
  return !!session?.user;
}

export async function requireAdmin(): Promise<User> {
  const user = await getUser();
  if (!user?.admin) {
    throw new Error("관리자 권한이 필요합니다.");
  }
  return user;
}
