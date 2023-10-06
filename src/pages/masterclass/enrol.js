import Footer from "../../components/footer";
import {useState} from 'react'
import Navbar from "../../components/navbar";
import {useTranslation} from "react-i18next";
import {HeadingSection} from "../../components/headingSection";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useHistory
} from "react-router-dom";
import {Button, Form, Input} from "antd";
import Captcha from '../../components/captcha'

export const Enroll = () => {
  const {t} = useTranslation("common");
  let history = useHistory();

  const [form] = Form.useForm();

  return (
    <>
      <Navbar />
      <div>
        <div>
          <img src="/img/Masterclasses.jpg" alt="university" className="w-full" />
        </div>
        <div className="flex justify-center">
          <div className="w-5/6 md:w-1/4">
            <div className="font-bold text-2xl my-5 main-color">Course Info</div>
            <div className="pb-5 flex justify-between">
              <div>
                <div className="font-bold">Course Name</div>
                <div>Creative and Critcal Thinking</div>
                <div className="font-bold">Tutor</div>
                <div>Robert</div>
                <div className="font-bold">Duration</div>
                <div>1 hour</div>
              </div>
              <div>
                <img src="/img/about_v2.png" className="rounded-full w-20"/>
              </div>
            </div>
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
              <div className="mb-5"><Captcha onVerify={(res) => console.log(222)} /></div>
              <Form.Item className="">
                <Button size="large" style={{backgroundColor: '#F05523', color: '#fff'}} className="w-1/3" htmlType="submit">Go to Pay</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};