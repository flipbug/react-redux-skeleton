const app = (state = {}, action) => {
  switch (action.type) {
    case 'SWITCH_ROUTE':
      return Object.assign({}, state, {
        route: action.route
      });
    case 'TOGGLE_SIDEBAR':
      return Object.assign({}, state, {
        sidebarVisible: !state.sidebarVisible
      });
    default:
      return state;
  }
};

export default app;

