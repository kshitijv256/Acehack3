import { IconName } from "src/components/base/Icon";

export enum SocialPlatforms {
  INSTA = "Instagram",
  TWITTER = "Twitter",
  LINKEDIN = "LinkedIn",
  DISCORD = "Discord",
  MEDIUM = "Medium",
}

type TSocialInfo = {
  icon: IconName;
  link: string;
};

export const SOCIALS: Record<SocialPlatforms, TSocialInfo> = {
  [SocialPlatforms.INSTA]: {
    icon: "instagram",
    link: "https://www.instagram.com/acehack3.0/",
  },
  [SocialPlatforms.TWITTER]: {
    icon: "twitter",
    link: "https://twitter.com/AceHack_uemj",
  },
  [SocialPlatforms.LINKEDIN]: {
    icon: "linkedin",
    link: "https://www.linkedin.com/company/acehack-2-0/",
  },
  [SocialPlatforms.DISCORD]: {
    icon: "discord",
    link: "https://discord.com/invite/RyUs94pSNT",
  },
  [SocialPlatforms.MEDIUM]: {
    icon: "medium",
    link: "https://medium.com/@AceHack2.0",
  },
};
