# React/Redux Skeleton

This is a react/redxu skeleton application to learn react and to use as reference for further projects. The frontend is built in addition with 
[react-md](https://react-md.mlaursen.com/) and [react-router](https://reacttraining.com/react-router/).

## Quickstart

* Simply checkout out the repository  `git clone git@bitbucket.org:notch-interactive/zesta-client.git`
* `cd zesta-client`
* Install all dependencies `npm install`
* Start the development server `npm start` 

Find more information about the setup [here](/REACT_README.md).

## Structure
The global entry point is `src/index.js`. This is where we define our initial redux store and setup the routing.

### actions
This directory contains all redux actions. An action is used to send data from the application to our store and shouldn't
contain any logic.
Note: Currently all actions are inside a single file, but as the app continous to grow it will be split into multpile files.

More information about actions [here](http://redux.js.org/docs/basics/Actions.html)

### components
All global components can be found in this directory. A component should be as pure as possible, which means it shouldn't 
keep a local state and contain as little logic as possible. If find yourself adding more and more functionality to a component
it would probably make sense to split it up into subcomponents and create a container to handle all the logic.
 
### reducers
Reducers are simple methods handle actions and are the only ones allowed to update the store. Important: the store is
immutable, which means a reducer method should only return a new state object and never mutate the existing state.

More information about reducers [here](http://redux.js.org/docs/basics/Reducers.html)

### routes
A route describes a path a user can navigate to. This is where we combine components and containers to build a single view.
A route can include subcomponents, containers and stylesheets.

### services
Services to provide an interface with different APIs can be found in this directory. Note this is probably going to change soon.

### styles
All global stylesheets are stored in this directory.
