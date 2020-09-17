import React, { useState, useRef } from "react";
import "./drawerform.scss";
import { InboxOutlined } from "@ant-design/icons";

import { Drawer, Form, Button, Col, Row, Input, Select, Upload } from "antd";
const { Option } = Select;

function DrawerForm({ addProduct, addCategory }) {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const formData = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData.current.getFieldsValue());
  };
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  return (
    <>
      {addProduct ? (
        <button className="btn btn--primary btn--rounded" onClick={showDrawer}>
          + Add Product
        </button>
      ) : (
        <button
          className="btn btn--primary btn--rounder btn--addcategory"
          onClick={showDrawer}
        >
          + Add Category
        </button>
      )}
      <Drawer
        title="Add Category"
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Button onClick={onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button
              htmlType="submit"
              // onClick={onClose}
              onClick={handleFormSubmit}
              type="primary"
              className="btn btn--primary"
            >
              Submit
            </Button>
          </div>
        }
      >
        <Form
          layout="vertical"
          hideRequiredMark
          ref={formData}
          onSubmit={handleFormSubmit}
        >
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Upload your Category image here">
                <Form.Item
                  name="dragger"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  noStyle
                >
                  <Upload.Dragger name="files" action="/upload.do">
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload.
                    </p>
                  </Upload.Dragger>
                </Form.Item>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  { required: true, message: "Please enter category name" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="slug"
                label="Slug"
                rules={[{ required: true, message: "Please enter slug" }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Type" name="type">
                <Select allowClear>
                  <Option value="1">Option 1</Option>
                  <Option value="2">Option 2</Option>
                  <Option value="3">Option 3</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
}

export default DrawerForm;
