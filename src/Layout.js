/**
 * Layout elements 
 *
 * @flow
 * @author mtownsend
 * @since Oct 2019
 */

import type { Node } from 'react';
import React from 'react';
import style from './Layout.css';

type BlockProps = {|
  children?: Node,
  background?: string | Array<string>
|};
const blockBackgroundStyle = (background?: string | Array<string>) => {
  if (!background) {
    return null;
  }
  const sizeList = Array.isArray(background) ? background : [ background ];
  while (sizeList.length < 5) {
    sizeList.push(background[0]);
  }
  return {
    '--background-sm': `url(${sizeList[0]})`,
    '--background-md': `url(${sizeList[1]})`,
    '--background-lg': `url(${sizeList[2]})`,
    '--background-xl': `url(${sizeList[3]})`
  };
};
export const Block = ({ children, background }:BlockProps) => (
  <section 
    className={style.block} 
    style={blockBackgroundStyle(background)}
  >
    { children }
  </section>
);

export const BlockList = ({ children }: {| children?: Array<Node> |}) => (
  <div className={style.blockList}>
    { children }
  </div>
);

type HeaderProps = {|
  children?: Node
|};
export const Header = ({ children }:HeaderProps) => (
  <h2 className={style.header}>{children}</h2>
);