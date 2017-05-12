const reporting = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_LIST_ENTRY':
      return Object.assign({}, state, {
        items: [
          ...state.items,
          {
            columns: action.columns,
            key: state.items.length++
          }
        ]
      });
    case 'REMOVE_LIST_ENTRY':
      return Object.assign({}, state, {
        items: state.items.slice(0, -1)
      });
    default:
      return state;
  }
};

export default reporting;

