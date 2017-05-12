import React from 'react';
import {connect} from 'react-redux';
import FontIcon from 'react-md/lib/FontIcons';

import {switchRoute, toggleSidebar} from '../../actions';
import Layout from './components/Layout';


const navItems = [{
  key: 'home',
  primaryText: 'Home',
  href: '/',
  leftIcon: <FontIcon>home</FontIcon>,
}, {
  key: 'reporting',
  primaryText: 'Reporting',
  leftIcon: <FontIcon>assessment</FontIcon>,
}, {
  key: 'settings',
  primaryText: 'Settings',
  leftIcon: <FontIcon>settings</FontIcon>,
}];


const mapStateToProps = (state) => {
  return {
    navItems: navItems,
    route: state.app.route,
    sidebarVisible: state.app.sidebarVisible
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    onNavClick: (route) => {
      dispatch(switchRoute(route))
    },
    onVisibilityToggle: () => {
      console.log("click");
      dispatch(toggleSidebar())
    },
  }
};


const MainLayout = connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);


export default MainLayout;
