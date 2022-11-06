import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { Caret } from '../icons'
import './NavList.css';

type Link = {
  text: string;
  link: string;
};

export type NavListProps = {
  heading: string;
  links: Link[];
  sitePathname: string;
  currentPageMatch: string;
  pageSection: string;
}

type Props = {
  nlp: NavListProps;
  children?: ReactNode;
}

const NavList = ({nlp}: Props ) => {
  const [expanded, setExpanded] = useState(nlp.heading === nlp.pageSection);

  return (
    <div className={`nav-group ${expanded ? 'expanded' : 'hidden'}`}>
      <h2
        className='nav-group-title' 
        onClick={() => setExpanded(!expanded)}
      >
        <Caret size={0.8} rotation={expanded ? 90 : 0} />
        {nlp.heading}
      </h2>
      <ul>
      {
        nlp.links.map((link, i) => {
          const url = nlp.sitePathname + link.link;
          return (
            <li className="nav-link" key={i}>
              <a href={url} aria-current={nlp.currentPageMatch === link.link ? 'page' : false}>
                {link.text}
              </a>
            </li>
          )
        })

      }
      </ul>
    </div>
  );
};

export default NavList;
