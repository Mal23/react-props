import React from 'react';
import logo from '../../assets/dog.jpeg';

export default function Header() {
  const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1em',
    height: '2em'
  };

  return (
    <header style={styles}>
      <img src={logo} style={{ height: '100%' }} />
      <h1 style={{ margin: 0 }}>My Dog</h1>
    </header>
  );
}
