import React from "react";

function SelectCategoryType(props) {
  return (
    <Select
      defaultValue={`${title} Type`}
      style={{ width: 200 }}
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
  );
}

export default SelectCategoryType;
