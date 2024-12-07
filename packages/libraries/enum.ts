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
  EMAIL = "eMail",
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
  DONATE = "/#donate",
  CONTACT = "/contact",
  LOGIN = "/login",
  NOT_FOUND = "/404",
  PHOTO_GALLERY = "/photo-gallery",
  PROJECTS = "/projects",
  DOWNLOADS = "/downloads",
  VOLUNTEER = "/volunteer",
  FAQS = "/#faqs",
  PRIVACY_POLICY = "/privacy-policy",
  PRESS = "/press",
}

export enum MODALS {}
