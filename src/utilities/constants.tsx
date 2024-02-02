export interface link {
  name: string;
  link: string;
}

interface navLinks extends Array<{ name: string; link: string }> {}

export const navLinks: navLinks = [
  {
    name: "Support",
    link: "https://medium.com/@mertenercan/nextjs-13-folder-structure-c3453d780366",
  },
  {
    name: "Blog",
    link: "https://medium.com/javascript-in-plain-english/things-you-dont-know-about-next-js-02ee54cb5b7f",
  },
  {
    name: "Terms",
    link: "https://docs.google.com/document/d/17hFc-CmNQrvXA_cYY01cfxukUwytZzjcxY3soh7QxA8/edit",
  },
  { name: "About", link: "https://www.chiraglalwani.com" },
];
