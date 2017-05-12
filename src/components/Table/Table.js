import React, { PropTypes } from 'react';
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableBody from 'react-md/lib/DataTables/TableBody';

import Row from './Row';
import Header from './Header';


const Table = ({header_items, rows}) => (
  <DataTable plain>
    <Header columns={header_items}/>
    <TableBody>
      {rows.map((item, key) => <Row key={key} columns={item.columns}/>)}
    </TableBody>
  </DataTable>
);

Table.propTypes = {
  rows: PropTypes.array.isRequired,
};

export default Table;
