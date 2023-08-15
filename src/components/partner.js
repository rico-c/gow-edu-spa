import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {Button, Form, Input} from "antd";
import {MainButton} from "./button";
import store from 'store';

// const sentWaitTime = 15 * 60 * 1000;
const sentWaitTime = 20 * 1000;

const PartnerForm = () => {
  const {t} = useTranslation("common");
  const [form] = Form.useForm();

  const [sent, setSent] = useState(store.get('sent') === '1');
  const [expire, setExpire] = useState(Number(store.get('expire')));

  const [enterEnable, setEnterEnable] = useState(false);

  useEffect(() => {
    if (sent) {
      setTimeout(() => {
        setSent(false);
        store.set('sent', '0');
      }, expire - Date.now())
    }
  }, [])

  const handleClick = () => {
    store.set('sent', '1');
    store.set('expire', Date.now() + sentWaitTime);
    setSent(true);
    setExpire(Date.now() + sentWaitTime)

    setTimeout(() => {
      setSent(false);
      store.set('sent', '0');
    }, sentWaitTime)
  }

  const handleFormChange = (data, allData) => {
    const pass = allData.map(i => i.errors).every(i => i.length === 0);
    if(pass) {
      setEnterEnable(true)
    }else {
      setEnterEnable(false)
    }
  }

  return (
    <div className="flex justify-center pt-10 w-full">
      <div className="shadow w-full max-w-2xl rounded p-10 mb-10 bg-white">
        <div className="text-3xl font-bold main-color mb-5">
          {t("parter-interest")}
        </div>
        <div>
          <Form form={form} layout="vertical" onFieldsChange={handleFormChange}>
            <Form.Item
              label={t("partner-form-first-name")}
              name="firstname"
              rules={[{required: true}]}
            >
              <Input placeholder={t("partner-form-first-name")} />
            </Form.Item>
            <Form.Item
              label={t("partner-form-last-name")}
              name="lastname"
              rules={[{required: true}]}
            >
              <Input placeholder={t("partner-form-last-name")} />
            </Form.Item>
            <Form.Item
              label={t("partner-form-email")}
              name="email"
              rules={[{type: 'email', message: 'Please input correct email'}, {required: true, message: 'Please input your email'}]}
            >
              <Input placeholder={t("partner-form-email")} />
            </Form.Item>
            <Form.Item
              label={t("veri-code")}
              name="verify-code"
              rules={[{required: true, message: 'Please input verify code'}]}
            >
              <div className="flex gap-5 items-baseline">
                <Input />
                <MainButton disabled={sent} onClick={handleClick}>{sent ? t('sent-code') : t('get-code')}</MainButton>
              </div>
            </Form.Item>
            <Form.Item>
              <Button
                disabled={!enterEnable}
                size="large"
                style={enterEnable && {backgroundColor: "#F05523", color: "#fff"}}
                className="w-full"
                htmlType="submit"
              >
                {t("enter")}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div >
  );
};

export default PartnerForm;
