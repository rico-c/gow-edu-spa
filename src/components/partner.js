import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Form, Input, Radio, Space, Select, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Option } = Select;

const PartnerForm = () => {
  const { t } = useTranslation("common");
  const [form] = Form.useForm();

  return (
    <div className="flex justify-center mt-10 w-full">
      <div className="shadow w-full max-w-2xl rounded p-10 mb-10">
        <div className="text-3xl font-bold main-color mb-5">
          {t("partner-title")}
        </div>
        <div>
          <Form form={form} layout="vertical">
            <Form.Item
              label={t("partner-title")}
              name="name"
              rules={[{ required: true }]}
            >
              <Input placeholder={t("partner-title")} />
            </Form.Item>
            <div dangerouslySetInnerHTML={{__html: t("partner-desc")}}></div>
            <Form.Item
              label={t("partner-form-first-name")}
              name="firstname"
              rules={[{ required: true }]}
            >
              <Input placeholder={t("partner-form-first-name")} />
            </Form.Item>
            <Form.Item
              label={t("partner-form-last-name")}
              name="lastname"
              rules={[{ required: true }]}
            >
              <Input placeholder={t("partner-form-last-name")} />
            </Form.Item>
            <Form.Item
              label={t("partner-form-email")}
              name="email"
              rules={[{ required: true }]}
            >
              <Input placeholder={t("partner-form-email")} />
            </Form.Item>
            <Form.Item
              label={t("partner-form-email-check")}
              name="email-check"
              rules={[{ required: true }]}
            >
              <Input placeholder={t("partner-form-email-check")} />
            </Form.Item>
            <Form.Item
              label={t("partner-form-country")}
              name="country"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Select a option and change input text above"
                allowClear
              >
                <Option value="china">china</Option>
                <Option value="australia">australia</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label={t("partner-form-category")}
              name="category"
              rules={[{ required: true }]}
            >
              <Radio.Group>
                <Space direction="vertical">
                  <Radio value={1}>University/Education Provider</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label={t("partner-form-file")}
              name="file"
              rules={[{ required: true }]}
            >
              <Upload action="/upload.do">
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item
              label={t("partner-form-message")}
              name="feedback"
              rules={[{ required: true }]}
            >
              <TextArea placeholder={t("partner-form-message")} />
            </Form.Item>
            <Form.Item>
              <Button
                size="large"
                style={{ backgroundColor: "#F05523", color: "#fff" }}
                className="w-full"
                htmlType="submit"
              >
                {t("partner-form-apply")}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default PartnerForm;
