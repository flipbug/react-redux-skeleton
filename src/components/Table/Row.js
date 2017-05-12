import React from 'react';

import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';


const Row = ({columns}) => (
  <TableRow>
    {columns.map((col,key) => <TableColumn key={key}>{col}</TableColumn>)}
  </TableRow>
);

export default Row;
