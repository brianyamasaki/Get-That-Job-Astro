import { SIDEBAR } from './config';
import { getLanguageFromURL } from './languages';

export const currentPageFixed = (currentPage: string) => (
  currentPage.endsWith('/') ? currentPage.slice(1, -1) : currentPage.slice(1)
);
export type PageLink = {
  text: string;
  link: string;
}

export type SidebarStructure = {
  next: PageLink;
  current: PageLink;
};

export const getSidebarStruct = (currentPage: string) : SidebarStructure => {
  const sidebar = SIDEBAR[getLanguageFromURL(currentPage)];
  const sections = Object.entries(sidebar);
  let current: PageLink = {
    text: '',
    link: ''
  };
  let next: PageLink = {
    text: '',
    link: ''
  };
  for (let iSection = 0; iSection < sections.length; iSection += 1) {
    const key = sections[iSection][0]; 
    const children = sidebar[key];
    for (let iChild = 0; iChild < children.length; iChild += 1) {
      const pageInfo = children[iChild];
      if (currentPage === pageInfo.link) {
        current = pageInfo;
        if (iChild < children.length - 1) {
          next = children[iChild + 1];
        } else if (iSection < sections.length - 1) {
          const keyNext =  sections[iSection + 1][0];
          const childrenNext = sidebar[keyNext];
          next = childrenNext[0];
        } 
        // following breaks us out of the outer loop
        iSection = sections.length;
        break;
      }
    }
  }

  return {
    current,
    next
  };
}