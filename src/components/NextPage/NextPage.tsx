import React from 'react';
import type { ReactNode } from 'react';
import { getSidebarStruct } from '../../utils';
import './NextPage.css';

type Props = {
  currentPageMatch: string;
  children?: ReactNode;
}

const NextPage = ({ currentPageMatch} : Props) => {

  const {next } = getSidebarStruct(currentPageMatch);
  
  return (
    <div className='next-page-link'>
      {next.text ? <span>Next: <a href={`/${next.link}`}>{next.text}</a></span> : ''}
    </div>
  )
}

export default NextPage;