import { PAGES } from "@/packages/libraries";

export const FOOTER_LINKS = [
  {
    title: "About",
    links: [
      { name: "Photo Gallery", link: PAGES.PHOTO_GALLERY },
      { name: "Press", link: PAGES.PRESS },
      { name: "Projects", link: PAGES.PROJECTS },
    ],
  },
  {
    title: "Societies",
    links: [
      { name: "Downloads", link: PAGES.DOWNLOADS },
      { name: "Voluteer", link: PAGES.VOLUNTEER },
    ],
  },
  {
    title: "Donate",
    links: [
      { name: "FAQs", link: PAGES.FAQS },
      { name: "Member Login", link: PAGES.LOGIN },
      { name: "Privacy Policy", link: PAGES.PRIVACY_POLICY },
    ],
  },
];
