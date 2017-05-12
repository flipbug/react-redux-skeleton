import React from 'react';
import Button from 'react-md/lib/Buttons/Button';

import MainLayout from '../../../components/MainLayout';
import Table from '../../../components/Table';

import './TableView.css';


const TableView = ({headerColumns, rows, onAddItemClick, onRemoveItemClick}) => (
      <MainLayout title="Reporting">
        <div className="md-grid">
          <div className="md-cell--6 md-text-left">
            <h1>Example Data</h1>
          </div>
        </div>

        <div className="md-grid">
          <div className="md-cell--12">
            <Button onClick={onAddItemClick} raised label="Add Item"/>
            <Button onClick={onRemoveItemClick} raised secondary label="Remove Item"/>
          </div>
        </div>

        <div className="md-grid">
          <div className="md-cell--12 md-cell--top">
            <Table header_items={headerColumns} rows={rows}/>
          </div>
        </div>
      </MainLayout>
    );

export default TableView
