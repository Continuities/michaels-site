/**
 * Application entry point
 * 
 * @flow
 * @author mtownsend
 * @since Oct 2019
 */

import React from 'react';
import { Block, BlockList, Header } from './Layout';
import style from './App.css';

import LoremImageSmall from '../public/lorem-pic-sm.jpg';
import LoremImageMedium from '../public/lorem-pic-md.jpg';
import LoremImageLarge from '../public/lorem-pic-lg.jpg';
import LoremImageXLarge from '../public/lorem-pic-xl.jpg';

export default () => (
  <BlockList>
    <Block background={[ LoremImageSmall, LoremImageMedium, LoremImageLarge, LoremImageXLarge ]}>
      I'm Michael, and I make things.
    </Block>
    <Block>
      <Header>Like this cool stuff:</Header>
    </Block>
  </BlockList>
);