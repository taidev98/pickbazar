import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./category.scss";
import Sortingbar from "../Sortingbar";
import { Table } from "antd";
import fetchCategory from "../../../actions/categoryAction";
function Category(props) {
  const categoryList = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      width: 100,
    },
    {
      title: "Name",
      dataIndex: "name",
      width: 400,
    },
    {
      title: "slug",
      dataIndex: "slug",
      width: 400,
    },
    {
      title: "Type",
      dataIndex: "type",
      width: 400,
    },
  ];
  useEffect(() => {
    dispatch(fetchCategory());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="category container">
      <Sortingbar title="Category" SelectCategoryType addCategory={true} />
      <Table
        columns={columns}
        dataSource={categoryList}
        pagination={{ pageSize: 50 }}
        scroll={{ y: 380 }}
        rowKey={(row) => row.id}
      />
    </div>
  );
}
export default Category;
