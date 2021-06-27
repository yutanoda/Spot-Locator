import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/spots">Spots</NavigationItem>
    <NavigationItem link="/users">Users</NavigationItem>
    <NavigationItem link="/account">Account</NavigationItem>
    <NavigationItem link="/login">Login</NavigationItem>
  </ul>
);

export default navigationItems;