export interface ImageObject {
  id: number;
  urls: {
    regular: string;
  };
  width: number;
  height: number;
}

export interface ImageList extends Array<ImageObject> {}

interface navLinks
  extends Array<{ name: string; link: string; target: string }> {}

export const navLinks: navLinks = [
  {
    name: "Images",
    link: "/images",
    target: "",
  },
  {
    name: "Support",
    link: "https://medium.com/@mertenercan/nextjs-13-folder-structure-c3453d780366",
    target: "_blank",
  },
  {
    name: "Blog",
    link: "https://medium.com/javascript-in-plain-english/things-you-dont-know-about-next-js-02ee54cb5b7f",
    target: "_blank",
  },
  {
    name: "Terms",
    link: "https://docs.google.com/document/d/17hFc-CmNQrvXA_cYY01cfxukUwytZzjcxY3soh7QxA8/edit",
    target: "_blank",
  },
  { name: "About", link: "https://www.chiraglalwani.com", target: "_blank" },
];
