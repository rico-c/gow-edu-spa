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

export const Enroll = () => {
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
            <img src={info.img_url} alt="university" className=" md:gap-10 w-5/6 md:w-1/2 rounded-2xl overflow-hidden" />
          </div>
          <div className="flex justify-center">
            <div className="md:flex md:gap-10 w-5/6 md:w-1/2">
              <div className="md:w-2/3">
                <div className="pb-5 flex justify-between">
                  <div>
                    <div className="font-bold text-2xl my-5 ">{info.course_name}</div>
                    <div className="flex gap-5 border-b py-5 ">
                      <div>
                        <img src="/img/about_v2.png" className="rounded-full w-20" />
                      </div>
                      <div>
                        <div className="font-bold text-lg main-color">Presenter:</div>
                        <div>{info.presenter_name}</div>
                      </div>
                    </div>
                    <div className="border-b py-5">
                      <div className="font-bold text-lg">Language:</div>
                      <div className="text-gray-700">{info.lang_info}</div>
                    </div>
                    <div className="border-b py-5">
                      <div className="font-bold text-lg">Duration:</div>
                      <div className="text-gray-700">{info.time_info}</div>
                    </div>
                    <div className="border-b py-5">
                      <div className="font-bold text-lg">Description:</div>
                      <div className="text-gray-700" dangerouslySetInnerHTML={{__html: info.long_info}}></div>
                    </div>
                    <div className="border-b py-5">
                      <div className="font-bold text-lg">Price:</div>
                      <div className="text-gray-700" >{info.price_info}</div>
                    </div>
                  </div>
                  {/* <div>
                  <img src="/img/about_v2.png" className="rounded-full w-20" />
                </div> */}
                </div>
              </div>
              <div className="md:flex-1 md:w-1/3 mt-10">
                <Form
                  className="md:p-5 border rounded-lg"
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
                  {/* <div className="mb-5"><Captcha onVerify={(res) => console.log(222)} /></div> */}
                  <Form.Item className="">
                    <MainButton size="large" className="w-1/3 md:w-full" htmlType="submit">Go to Pay</MainButton>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      }
      <Footer />
    </>
  );
};