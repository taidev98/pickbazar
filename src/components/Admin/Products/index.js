import React from "react";
import "./products.scss";
import Sortingbar from "../Sortingbar";
import { Table } from "antd";
function Products(props) {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: 150,
    },
    {
      title: "Age",
      dataIndex: "age",
      width: 150,
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];

  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }
  return (
    <div className="category container">
      <Sortingbar
        title="Products"
        SelectCategoryType
        SelectPrice
        addCategory={false}
      />
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 50 }}
        scroll={{ y: 380 }}
      />
    </div>
  );
}

export default Products;
