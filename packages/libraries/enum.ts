export enum TOKEN {
  /** Verification Header */
  HEADER = "vHdr",
  /** Verification Payload */
  PAYLOAD = "vPl",
  /** Verification Signature */
  SIGNATURE = "vSg",
}

export enum APP {
  TOKEN = "tKn",
  USER_TYPE = "uType",
  USERNAME = "uNme",
  USER_ID = "uID",
}

export enum USER_TYPE {
  SUPER_ADMIN = "super-admin",
  ADMIN = "admin",
  GUEST = "website-guest",
}

export enum PAGES {
  WEBSITE = "/",
  DASHBOARD = "/dashboard",
  ABOUT = "/about",
  BRANCHES = "/branches",
  BLOG = "/blog",
  DONATE = "/donate",
  CONTACT = "/contact",
  LOGIN = "/login",
  NOT_FOUND = "/404",
}

export enum MODALS {}
