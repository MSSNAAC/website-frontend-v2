"use server";

import { APP, encode, USER_TYPE } from "@/packages/libraries";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

export async function getUserType() {
  const encodedUserType = await getCookie(APP.USER_TYPE, { cookies });

  if (encodedUserType) {
    return encode(encodedUserType as string);
  }

  return USER_TYPE.GUEST;
}
