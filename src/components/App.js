import React from 'react';
import Dog from './Dog';
import Header from './Header';

export default function App() {
  console.log('hi');
  return (
    <>
      <Header />
      <Dog name="Nan" age="5" weight="7 lbs" />
    </>
  );
}
