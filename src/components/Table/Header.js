import React from 'react';

import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';


const Header = ({columns}) => (
  <TableHeader>
    <TableRow>
      {columns.map((col,key) => <TableColumn key={key}>{col}</TableColumn>)}
    </TableRow>
  </TableHeader>
);

export default Header;
