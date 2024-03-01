import React, { useEffect, useState } from "react";
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  message,
  Upload,
} from "antd";
import { useTranslation } from "react-i18next";
import { subjects } from "../constants/subjects";
import { countryEn, countryZh } from "../constants/country";
import { mobileCode } from "../constants/code";
import { fetchSelectList } from "../api/rank";
import { uniq } from "lodash";
import { submit_student } from "../api/student-form";

const currentYear = new Date().getFullYear();

const codes = uniq(Object.values(mobileCode).sort((a, b) => a - b));

const yearList = [
  currentYear,
  currentYear + 1,
  currentYear + 2,
  currentYear + 3,
];

export const StudyForm = ({ shadow }) => {
  const { t, i18n } = useTranslation("studyform");

  const [rankdata, setRankdata] = useState([]);

  const [messageApi, contextHolder] = message.useMessage();
  const lang = i18n.language;

  const coutryList = lang === "zh" ? countryZh : countryEn;

  const selectBefore = (
    <Select defaultValue="http://">
      <Select.Option value="http://">http://</Select.Option>
      <Select.Option value="https://">https://</Select.Option>
    </Select>
  );

  const handleFinish = (data) => {
    if (!data.agree) {
      // messageApi.open({
      //   type: "error",
      //   content: "please agree our policy",
      // });
      alert('Please agree our policy')
      return;
    }
    if (data.email !== data["email-repeat"]) {
      messageApi.open({
        type: "error",
        content: "email not match",
      });
      return;
    }
    console.log(data);
    submit_student({
      first_name: data.firstname,
      last_name: data.lastname,
      email_address: data.email,
      mobile_area_code: `+${data.code}`,
      mobile_no: data.mobile,
      study_country: data.destination,
      study_year: String(data.year),
      study_area: data.area,
      is_on_update: Boolean(data['receive-updates']) ? 'yes' : 'no', 
      current_country: data['current-country']
      ,
    }).then(res => {
      if(res.status === 'success') {
        alert('Submit success')
      } else {
        alert(res.message)
      }
    });
  };

  const handleFailed = (data) => {
    console.log(222, data);
  };

  useEffect(() => {
    const fetch = async () => {
      const res = await fetchSelectList();
      setRankdata(res.country_list);
    };

    fetch();
  }, []);

  return (
    <div className="w-full p-5 bg-white border">
      <div
        style={{
          background: "linear-gradient(to bottom, #0ACAD5, #0299C4)",
          color: "#fff",
          width: "calc(100% + 2.5rem)",
          position: "relative",
          top: "-1.25rem",
          left: "-1.25rem",
          padding: "1.25rem",
        }}
      >
        <div className="text-xl font-bold">{t("title")}</div>
        <div className="py-5">{t("sub-title")}</div>
      </div>
      <Form
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        layout="vertical"
        shadow={shadow}
        onFocus={(e) => console.log(e)}
        onFinish={handleFinish}
        onFinishFailed={handleFailed}
        style={{ fontSize: "16px" }}
      >
        <Form.Item
          label={t("first-name")}
          name="firstname"
          required
          rules={[{ required: true, message: "Please input your first name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("last-name")}
          name="lastname"
          required
          rules={[{ required: true, message: "Please input your last name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("email-address")}
          name="email"
          required
          rules={[
            { type: "email", message: "Please input correct email" },
            { required: true, message: "Please input your email" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("email-confirm")}
          name="email-repeat"
          required
          rules={[
            { type: "email", message: "Please input correct email" },
            { required: true, message: "Please input your email" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label={t("current-country")} name="current-country">
          <Select
            virtual={false}
            getPopupContainer={(triggerNode) => triggerNode.parentNode}
            // showSearch
            // filterOption={(input, option) =>
            //   (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            // }
            options={coutryList}
          ></Select>
        </Form.Item>
        <div className="flex gap-1">
          <Form.Item
            className="w-20"
            label={t("mobile")}
            name="code"
            required
            rules={[{ required: true, message: "Please input your mobile" }]}
          >
            <Select
              virtual={false}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              getPopupContainer={(triggerNode) => triggerNode.parentNode}
            >
              {codes.map((code) => (
                <Select.Option value={code}>+{code}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label=" "
            name="mobile"
            rules={[
              {},
            ]}
          >
            <Input />
          </Form.Item>
        </div>

        <Form.Item
          label={t("destination")}
          name="destination"
          required
          rules={[
            { required: true, message: "Please select your destination" },
          ]}
        >
          <Select
            virtual={false}
            getPopupContainer={(triggerNode) => triggerNode.parentNode}
          >
            {rankdata.map((item) => (
              <Select.Option key={item.country_code} value={item.country_code}>
                {item.country_name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label={t("year")}
          name="year"
          required
          rules={[{ required: true, message: "Please select year" }]}
        >
          <Select
            virtual={false}
            getPopupContainer={(triggerNode) => triggerNode.parentNode}
          >
            {yearList.map((year) => (
              <Select.Option key={year} value={year}>
                {year}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label={t("area")}
          name="area"
          required
          rules={[{ required: true, message: "Please select your area" }]}
        >
          <Select
            virtual={false}
            getPopupContainer={(triggerNode) => triggerNode.parentNode}
          >
            {subjects.map((subject) => (
              <Select.Option key={subject} value={subject}>
                {subject}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        {/* <Form.Item name="contact-me" valuePropName="checked">
        <Checkbox>{t('contact-me')}</Checkbox>
      </Form.Item> */}
        <Form.Item name="agree" valuePropName="checked">
          <Checkbox>
            {t("agree")}{" "}
            <a className="underline" href="/terms">
              Terms
            </a>{" "}
            ,{" "}
            <a className="underline" href="/privacy">
              Privacy Policy
            </a>{" "}
          </Checkbox>
        </Form.Item>
        <Form.Item name="receive-updates" valuePropName="checked">
          <Checkbox>{t("receive-updates")}</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            className="w-full"
            htmlType="submit"
            type="primary"
            style={{ backgroundColor: "#f05622" }}
          >
            {t("submit")}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
