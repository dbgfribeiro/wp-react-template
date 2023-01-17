import React from 'react';
import Button from '../Button';

import styles from './navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1>Hello</h1>
      <Button variant="secondary">Click me!</Button>
    </nav>
  );
};

export default Navbar;
