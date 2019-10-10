/**
 * Application entry point
 * 
 * @flow
 * @author mtownsend
 * @since Oct 2019
 */

import React from 'react';
import { Block, Header } from './Layout';
import * as Selectable from './Selectable';
import style from './App.css';

import TitleSmall from '../public/lorem-pic-sm.jpg';
import TitleMedium from '../public/lorem-pic-md.jpg';
import TitleLarge from '../public/lorem-pic-lg.jpg';
import TitleXLarge from '../public/lorem-pic-xl.jpg';

import Thing1Small from '../public/thing-1-sm.jpg';
import Thing1Medium from '../public/thing-1-md.jpg';
import Thing1Large from '../public/thing-1-lg.jpg';
import Thing1XLarge from '../public/thing-1-xl.jpg';

import Thing2Small from '../public/thing-2-sm.jpg';
import Thing2Medium from '../public/thing-2-md.jpg';
import Thing2Large from '../public/thing-2-lg.jpg';
import Thing2XLarge from '../public/thing-2-xl.jpg';

import Thing3Small from '../public/thing-3-sm.jpg';
import Thing3Medium from '../public/thing-3-md.jpg';
import Thing3Large from '../public/thing-3-lg.jpg';
import Thing3XLarge from '../public/thing-3-xl.jpg';

import Thing4Small from '../public/thing-4-sm.jpg';
import Thing4Medium from '../public/thing-4-md.jpg';
import Thing4Large from '../public/thing-4-lg.jpg';
import Thing4XLarge from '../public/thing-4-xl.jpg';

export default () => (
  <Selectable.Container>
    <Selectable.Item>
      <Block background={[ TitleSmall, TitleMedium, TitleLarge, TitleXLarge ]}>
        I'm Michael, and I make things.
      </Block>
    </Selectable.Item>
    <Selectable.Item>
      <Block size='compact'>
        <Header>Like this cool stuff:</Header>
      </Block>
    </Selectable.Item>
    <Selectable.Item tag='thing-1'>
      <Block background={[ Thing1Small, Thing1Medium, Thing1Large, Thing1XLarge ]}>
        The First Thing
      </Block>
    </Selectable.Item>
    <Selectable.Content tag='thing-1'>
      <Block size='full'>
        DETAILS ABOUT THE FIRST THING
      </Block>
    </Selectable.Content>
    <Selectable.Item tag='thing-2'>
      <Block background={[ Thing2Small, Thing2Medium, Thing2Large, Thing2XLarge ]}>
        The Second Thing
      </Block>
    </Selectable.Item>
    <Selectable.Content tag='thing-2'>
      <Block size='full'>
        DETAILS ABOUT THE SECOND THING
      </Block>
    </Selectable.Content>
    <Selectable.Item tag='thing-3'>
      <Block background={[ Thing3Small, Thing3Medium, Thing3Large, Thing3XLarge ]}>
        The Third Thing
      </Block>
    </Selectable.Item>
    <Selectable.Content tag='thing-3'>
      <Block size='full'>
        DETAILS ABOUT THE THIRD THING
      </Block>
    </Selectable.Content>
    <Selectable.Item tag='thing-4'>
      <Block background={[ Thing4Small, Thing4Medium, Thing4Large, Thing4XLarge ]}>
        The Fourth Thing
      </Block>
    </Selectable.Item>
    <Selectable.Content tag='thing-4'>
      <Block size='full'>
        DETAILS ABOUT THE FOURTH THING
      </Block>
    </Selectable.Content>
  </Selectable.Container>
);