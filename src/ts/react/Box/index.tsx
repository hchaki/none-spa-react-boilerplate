'use strict';
import React from 'react';
import { render } from 'react-dom';

type tBox = {
  width: number;
  height: number;
};
const Box = ({ width, height }: tBox) => {
  const style = { width, height };
  return <div style={style}>Box</div>;
};

export const renderBox = (props: tBox, container: Element) =>
  render(<Box {...props}></Box>, container);
export default Box;
