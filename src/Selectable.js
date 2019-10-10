/**
 * Selectable items in a container
 * 
 * @flow
 * @author mtownsend
 * @since Oct 2019
 */

import type { Ref, Node } from 'react';
import React, { useContext, useEffect, useState, useReducer, createRef } from 'react';
import classnames from 'classnames';
import style from './Selectable.css';


type SelectAction = {|
  type: 'select',
  tag: string,
  scrollTo: HTMLLIElement | null
|} | {|
  type: 'deselect'
|};

type SelectState = {
  selected: string | null,
  scrollTo: HTMLLIElement | null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'select':
      if (action.tag === state.selected) {
        return reducer(state, { type: 'deselect' });
      }
      return { 
        selected: action.tag,
        scrollTo: action.scrollTo
      };
    case 'deselect':
      return { 
        selected: null, 
        scrollTo: null 
      };
  }
  return state;
};

type ContainerProps = {|
  children: Node
|};
export const Context = React.createContext<{ state:SelectState, dispatch:SelectAction => void }>({});
export const Container = ({ children }:ContainerProps) => {
  const [ state, dispatch ] = useReducer<SelectState, SelectAction>(reducer, { selected: null, scrollTo: null });

  useEffect(() => {
    console.log('scroll effect triggered');
    state.scrollTo && state.scrollTo.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [ state.scrollTo ]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <ul className={classnames(style.container, state.selected && style.selectActive)}>
        { children }
      </ul>
    </Context.Provider>
  );
};

type ItemProps = {|
  children: Node,
  tag?: string
|};
export const Item = ({ children, tag }:ItemProps) => { 
  const { state, dispatch } = useContext(Context);
  const className = classnames(style.item, state.selected === tag ? style.selected : null);
  const ref = createRef();
  return (
    <li 
      ref={ref} 
      className={className} 
      onClick={() => tag && dispatch({ type: 'select', tag, scrollTo: ref.current })}
    >
      { children }
    </li>
  );
};

type ContentProps = {|
  children: Node,
  tag: string
|};
export const Content = ({ children, tag }:ContentProps) => { 
  const { state } = useContext(Context);
  return (
    <div className={classnames(style.content, state.selected === tag && style.shown)}>
      {children}
    </div>
  );
};



