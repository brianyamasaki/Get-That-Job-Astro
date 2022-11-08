import React from 'react';
import type { ReactNode } from 'react';

type CaretProps = {
  size?: number;
  rotation?: number;
  color?: string;
  children?: ReactNode;
}

export const Caret = ({size, rotation, color}: CaretProps) => {
  const width = size ? `${24 * size}px` : '24px';
  const rotate = rotation ? rotation : 0;
  const colorStr = color ? color : '#888888';
  const props = {
    width,
    height: width,
    transform: `rotate(${rotate}deg)`,
    transitionDuration: '0.3s'
  };

  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={props}>
      <path d="M9 17.898C9 18.972 10.2649 19.546 11.0731 18.8388L17.3838 13.3169C18.1806 12.6197 18.1806 11.3801 17.3838 10.6829L11.0731 5.16108C10.2649 4.45388 9 5.02785 9 6.1018V17.898Z" fill={colorStr}/>
    </svg>
  )
}