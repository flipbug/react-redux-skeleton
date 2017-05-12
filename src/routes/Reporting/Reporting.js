import {connect} from 'react-redux';

import {addListEntry, removeListEntry} from '../../actions';
import TableView from './components/TableView';


const mapStateToProps = (state) => {
  return {
    headerColumns: ["foo", "bar"],
    rows: state.reporting.items
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    onAddItemClick: (text) => {
      dispatch(addListEntry(text))
    },
    onRemoveItemClick: () => {
      dispatch(removeListEntry())
    },
  }
};


const Reporting = connect(
  mapStateToProps,
  mapDispatchToProps
)(TableView);


export default Reporting
