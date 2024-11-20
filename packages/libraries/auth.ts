import { USER_TYPE } from "./enum";

export function isAdmin(userType: string) {
  return USER_TYPE.ADMIN.endsWith(userType);
}
export function isSuperAdmin(userType: string) {
  return USER_TYPE.SUPER_ADMIN.endsWith(userType);
}

export function isGuest(userType: string) {
  return USER_TYPE.GUEST.endsWith(userType);
}
