import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Chen Jing",
  EMAIL: "hi@chenjing.tech",
  NUM_POSTS_ON_HOMEPAGE: 7,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 5,
};

export const HOME: Metadata = {
  TITLE: "主页",
  DESCRIPTION: "Chen Jing 个人网站",
};

export const BLOG: Metadata = {
  TITLE: "文章",
  DESCRIPTION: "文字记录我生命的点滴",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "项目",
  DESCRIPTION: "我做过什么和正在做什么。",
};

export const SOCIALS: Socials = [
   { 
    NAME: "Twitter",
    HREF: "https://x.com/HangzhouIn"
  },
  // { 
  //   NAME: "linkedin",
  //   HREF: "https://www.linkedin.com/in/markhorn-dev",
  // }
];
