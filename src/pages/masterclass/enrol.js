import Footer from "../../components/footer";
import {useState, useEffect} from 'react'
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
import {Button, Form, Input, Spin} from "antd";
import Captcha from '../../components/captcha'
import {fetchCourseInfo} from '../../api/masterclass'
import {MainButton} from '../../components/button'
import {
  GlobalOutlined,
  FileTextOutlined,
  UserOutlined
} from '@ant-design/icons';

export const Enrol = () => {
  const {t} = useTranslation("common");
  let history = useHistory();
  const {id} = useParams();

  const [info, setInfo] = useState({})

  const [form] = Form.useForm();

  useEffect(() => {
    const fetch = async () => {
      const res = await fetchCourseInfo({id})
      setInfo(res)
    }
    fetch();
  }, [])
  console.log(info);
  return (
    <>
      <Navbar />
      {
        !info.course_name && <div className="flex py-20 justify-center items-center"><Spin tip="Loading Data" size="large"></Spin ></div>
      }
      {
        info.course_name &&
        <div>
          <div className="md:flex justify-center ">
            <img src={info.img_url} alt="university" className=" md:gap-10 w-5/6 md:max-w-screen-xl rounded-2xl overflow-hidden" />
          </div>
          <div className="flex justify-center">
            <div className="md:flex md:gap-5 w-5/6 md:max-w-screen-xl">
              <div className="md:w-2/3 md:pr-5 md:pl-10">
                <div className="pb-5 flex justify-between">
                  <div>
                    <div className="font-bold text-2xl my-5 ">{info.course_name}</div>
                    <div className="gap-5 border-b pb-5 flex">
                      <div>
                        <img src={info.profile_img_url} className="rounded-full w-20" />
                      </div>
                      <div>
                        <div className="font-bold text-lg main-color">Presenter</div>
                        <div>{info.presenter_name}</div>
                      </div>
                    </div>
                    <div className="border-b py-5">
                      <div className="font-bold text-lg flex items-center gap-2"><GlobalOutlined />Language</div>
                      <div className="text-gray-700">{info.lang_info}</div>
                    </div>
                    {/* <div className="border-b py-5">
                      <div className="font-bold text-lg">Duration</div>
                      <div className="text-gray-700">{info.time_info}</div>
                    </div> */}
                    <div className="border-b py-5">
                      <div className="font-bold text-lg flex items-center gap-2"><FileTextOutlined />Description</div>
                      <div className="text-gray-700" dangerouslySetInnerHTML={{__html: info.long_info}}></div>
                    </div>
                    <div className="border-b py-5">
                      <div className="font-bold text-lg flex items-center gap-2"><UserOutlined />Profile of Presenter</div>
                      <div className="text-gray-700" dangerouslySetInnerHTML={{__html: info.presenter_info}}></div>
                    </div>
                    {/* <div className="border-b py-5">
                      <div className="font-bold text-lg">Price</div>
                      <div className="text-gray-700" >{info.price_info}</div>
                    </div> */}
                  </div>
                  {/* <div>
                  <img src="/img/about_v2.png" className="rounded-full w-20" />
                </div> */}
                </div>
              </div>
              <div className="md:flex-1 md:w-1/3 mt-10 md:mr-10">
                <Form
                  className="md:p-5 md:border rounded-lg sticky top-10"
                  form={form}
                  layout="vertical"
                >
                  <Form.Item
                    label={'First Name'}
                    name="first-name"
                    rules={[{required: true, message: 'First name is required'}]}
                  >
                    <Input placeholder={t('contact-form-name')} />
                  </Form.Item>
                  <Form.Item
                    label={'Last Name'}
                    name="last-name"
                    rules={[{required: true, message: 'Last name is required'}]}
                  >
                    <Input placeholder={t('contact-form-name')} />
                  </Form.Item>
                  <Form.Item
                    label={t('contact-form-email')}
                    name="email"
                    rules={[{required: true, message: 'Email is required'}, {
                      type: 'email',
                      message: 'The input is not valid E-mail',
                    },]}
                  >
                    <Input placeholder={t('contact-form-email')} />
                  </Form.Item>
                  <Form.Item
                    label={t('confirm-form-email')}
                    name="confirm-email"
                    dependencies={['email']}
                    rules={[{required: true, message: 'Please confirm your Email'}, {
                      type: 'email',
                      message: 'The input is not valid E-mail',
                    }, ({getFieldValue}) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('email') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('The email that you entered do not match'));
                      },
                    })]}
                  >
                    <Input autoComplete="off" onPaste={e => {e.preventDefault();}} placeholder={t('confirm-form-email')} />
                  </Form.Item>
                  {/* <div className="mb-5"><Captcha onVerify={(res) => console.log(222)} /></div> */}
                  <div className="flex justify-end mb-5 font-bold">{info.price_info}</div>
                  <Form.Item className="">
                    <MainButton size="large" className="w-full" htmlType="submit">Enrol now</MainButton>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};