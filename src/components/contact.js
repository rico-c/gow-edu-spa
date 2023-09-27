import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Button, Form, Input, Radio} from "antd";
import Captcha from './captcha';

const {TextArea} = Input;

const ContactForm = () => {
  const {t} = useTranslation("common");
  const [form] = Form.useForm();



  return (
    <div className="flex flex-col items-center justify-center mt-10 w-full">
      <div className="shadow w-full max-w-xl rounded p-10 mb-10">
        <div className="text-3xl font-bold main-color mb-5">
          {t("contact-title")}
        </div>
        <div>
          <Form
            form={form}
            layout="vertical"
          >
            <Form.Item
              label={t('contact-form-name')}
              name="name"
              rules={[{required: true}]}
            >
              <Input placeholder={t('contact-form-name')} />
            </Form.Item>
            <Form.Item
              label={t('contact-form-email')}
              name="email"
              rules={[{required: true}]}
            >
              <Input placeholder={t('contact-form-email')} />
            </Form.Item>
            <Form.Item
              label={t('contact-form-feedback')}
              name="feedback"
              rules={[{required: true}]}
            >
              <TextArea placeholder={t('contact-form-feedback')} />
            </Form.Item>
            <div className="mb-5"><Captcha onVerify={(res) => console.log(222)}/></div>
            <Form.Item>
              <Button size="large" style={{backgroundColor: '#F05523', color: '#fff'}} className="w-full" htmlType="submit">Submit</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="shadow w-full max-w-xl rounded p-10 mb-10">
        <div className="text-3xl font-bold main-color mt-10 mb-5">
          {t("contact-wechat-title")}
        </div>
        <div>
          <img src={"/qr/wechat.jpeg"} />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
