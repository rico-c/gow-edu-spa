import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {Button, Form, Input, message} from "antd";
import {MainButton} from "./button";
import {fetchVerifyCode, doVerify} from '../api/partner'
import store from 'store';

const sentWaitTime = 20 * 1000;

const PartnerForm = ({onEnter, checkBoxLine}) => {
  const {t} = useTranslation("common");
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const [sent, setSent] = useState(store.get('sent') === '1');
  const [expire, setExpire] = useState(Number(store.get('expire')));

  const [enterEnable, setEnterEnable] = useState(false);
  const [hasBeforeInput, setHasBeforeInput] = useState(false);


  useEffect(() => {
    if (sent) {
      setTimeout(() => {
        setSent(false);
        store.set('sent', '0');
      }, expire - Date.now())
    }
  }, [])

  const handleClick = async () => {
    store.set('sent', '1');
    store.set('expire', Date.now() + sentWaitTime);
    setSent(true);
    setExpire(Date.now() + sentWaitTime)

    fetchVerifyCode({email_address: form.getFieldValue('email')}).then(code => console.log(code))

    setTimeout(() => {
      setSent(false);
      store.set('sent', '0');
    }, sentWaitTime)
  }

  const handleFormChange = (data, allData) => {
    const pass = allData.filter(i => i.name[0] !== 'entityname').every(i => i.errors.length === 0 && i.touched);
    if (pass) {
      setEnterEnable(true)
    } else {
      setEnterEnable(false)
    }
    if (allData[0].value && allData[1].value && allData[2].value && allData[2].errors.length === 0) {
      setHasBeforeInput(true)
    } else {
      setHasBeforeInput(false)
    }
  }

  const handleFinish = async (data) => {
    try {
      const res = await doVerify({email_address: form.getFieldValue('email'), code: form.getFieldValue('verify-code')})
      if (res.status === 'success') {
        onEnter(data);
      } else {
        messageApi.open({
          type: 'error',
          content: 'Verification code is incorrect',
          duration: 3,
        });
      }
    } catch (e) {
      alert('The verification code is invalid or has expired. Please try again.')
    }
  }

  return (
    <div className="flex justify-center pt-10 w-full">
      <div className="shadow w-full max-w-3xl rounded p-10 mb-10 bg-white">
        <div className="text-3xl font-bold main-color mb-5">
          {t("parter-interest")}
        </div>
        <div>
          <Form form={form} layout="vertical" onFieldsChange={handleFormChange} onFinish={handleFinish}>
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
              label={t("entity-name")}
              name="entityname"
            >
              <Input placeholder={t("entity-name")} />
            </Form.Item>
            <MainButton disabled={sent || !hasBeforeInput} onClick={handleClick}>{sent ? t('sent-code') : t('get-code')}</MainButton>
            <Form.Item
              label={t("veri-code")}
              name="verify-code"
              rules={[{required: true, message: 'Please input verify code'}]}
            >
              <div className="flex gap-5 items-center">
                <Input />
              </div>
            </Form.Item>
            {checkBoxLine}
            <Form.Item className="text-center">
              <Button
                disabled={!enterEnable}
                size="large"
                style={enterEnable && {backgroundColor: "#F05523", color: "#fff"}}
                className="w-1/2"
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
