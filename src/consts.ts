import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Chen Jing",
  EMAIL: "hi@chenjing.tech",
  NUM_POSTS_ON_HOMEPAGE: 4,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "主页",
  DESCRIPTION: "Chen Jing个人网站",
};

export const BLOG: Metadata = {
  TITLE: "文章",
  DESCRIPTION: "文字记录我生命的章节",
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
    NAME: "小红书",
    HREF: "https://www.xiaohongshu.com/user/profile/59f426b9e8ac2b4ec98ad493",
  } ,
  // { 
  //   NAME: "github",
  //   HREF: "https://github.com/markhorn-dev"
  // },
  // { 
  //   NAME: "linkedin",
  //   HREF: "https://www.linkedin.com/in/markhorn-dev",
  // }
];
