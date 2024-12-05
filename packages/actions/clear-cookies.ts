"use server";

import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

export async function deleteCookie(cookie: RequestCookie) {
  const cookieStore = cookies();
  (await cookieStore).delete(cookie.name);
}

export async function clearCookies() {
  const cookieStore = cookies();
  (await cookieStore).getAll().forEach(deleteCookie);
}
