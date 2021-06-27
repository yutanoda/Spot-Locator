import React from 'react';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>
      Spot Locator
    </div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
)

export default toolbar;