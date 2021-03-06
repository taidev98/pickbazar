import React from "react";
import { Table } from "antd";
import Sortingbar from "../Sortingbar";
import "./orders.scss";

function Orders(props) {
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
    <div className="orders container">
      <Sortingbar title="Orders" OrderLimits Status />
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 50 }}
        scroll={{ y: 440 }}
      />
    </div>
  );
}

export default Orders;
