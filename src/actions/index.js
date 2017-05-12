export const addListEntry = (event) => {
  return {
    type: 'ADD_LIST_ENTRY',
    columns: ["foo", "bar"]
  }
};


export const removeListEntry = () => {
  return {
    type: 'REMOVE_LIST_ENTRY',
  }
};


export const switchRoute = (route) => {
  return {
    type: 'SWITCH_ROUTE',
    route: route
  }
};

export const toggleSidebar = () => {
  return {
    type: 'TOGGLE_SIDEBAR',
  }
};
