import React from 'react';
import Color from './Color';

export default function App() {
  const name = 'Pearl Violet';
  const rgb = {
    red: 134,
    green: 115,
    blue: 161
  };

  return <Color name={name} rgb={rgb} />;
}
