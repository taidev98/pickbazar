import React from "react";
import "./sortingbar.scss";
import { Select } from "antd";
import DrawerForm from "../DrawerForm";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}
function Sortingbar({
  title,
  sort,
  SelectCategoryType,
  SelectPrice,
  addCategory,
  Status,
  OrderLimits,
}) {
  return (
    <div className="sorting-bar">
      <h2 className="sorting-bar__title">{title}</h2>
      {SelectCategoryType && (
        <Select
          defaultValue={`Category Type`}
          style={{ width: 400 }}
          onChange={handleChange}
          size="large"
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      )}
      {Status && (
        <Select
          defaultValue="Status"
          style={{ width: 400, marginLeft: 10 }}
          onChange={handleChange}
          size="large"
        >
          <Option value="hightesttolowest">Highest To Lowest</Option>
          <Option value="lewesttohighest">Lewest To Highest</Option>
        </Select>
      )}
      {OrderLimits && (
        <Select
          defaultValue="Order Limits"
          style={{ width: 400, marginLeft: 10 }}
          onChange={handleChange}
          size="large"
        >
          <Option value="hightesttolowest">Highest To Lowest</Option>
          <Option value="lewesttohighest">Lewest To Highest</Option>
        </Select>
      )}
      <input
        type="text"
        placeholder="Ex: Search By Name"
        className="sorting-bar__sortname"
      />
      {addCategory && <DrawerForm addCategory />}
    </div>
  );
}

export default Sortingbar;
