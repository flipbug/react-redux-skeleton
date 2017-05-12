import React, {Component} from 'react';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import {Redirect} from "react-router-dom";
import FontIcon from 'react-md/lib/FontIcons';

import './Layout.css';


export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.navItems = props.navItems.map((item) => {
      let path = item.hasOwnProperty('href') ? item.href : '/' + item.key;
      item.onClick = () => this.props.onNavClick(path);
      return item;
    });
  }

  doNothing() {
    // Since the provided onVisibilityToggle doesn't behave as expected,
    // we have to use custom buttons, but it still has to be defined for the
    // visible attribute to work.
  }

  render() {
    if (this.props.route !== window.location.pathname) {
      return (
        <Redirect to={this.props.route}/>
      );
    } else {
      return (
        <NavigationDrawer
          drawerTitle="Hello World"
          toolbarTitle={this.props.title}
          onVisibilityToggle={this.doNothing}
          visible={this.props.sidebarVisible}
          persistentIconChildren={
            <FontIcon onClick={this.props.onVisibilityToggle}>close</FontIcon>
          }
          temporaryIconChildren={
            <FontIcon onClick={this.props.onVisibilityToggle}>menu</FontIcon>
          }
          drawerType="persistent-mini"
          navItems={this.navItems}>
          {this.props.children}
        </NavigationDrawer>
      )
    }
  }
}
