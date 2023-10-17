import Footer from "../../components/footer";
import {useEffect, useState} from 'react'
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
import {Button} from "antd";
import {fetchCourseInfo} from '../../api/masterclass'
import {MainButton} from '../../components/button'
import {Spin} from 'antd';

export const Detail = () => {
  const {t} = useTranslation("common");
  const {id} = useParams();

  const [info, setInfo] = useState({})
  console.log(1, id);
  let history = useHistory();

  const handleEnroll = () => {
    history.push('/masterclass/enroll/1')
  }

  const handleBack = () => {
    history.go(-1)
  }

  useEffect(() => {
    const fetch = async () => {
      const res = await fetchCourseInfo({id})
      console.log(2, res);
      setInfo(res)
    }
    fetch();
  }, [])

  return (
    <>
      <Navbar />
      {
        !info.course_name && <div className="flex py-20 justify-center items-center"><Spin tip="Loading Data" size="large"></Spin ></div>
      }
      {
        info.course_name && <div>
          <div className="md:flex justify-center ">
            <img src={info.img_url} alt="university" className=" md:gap-10 w-5/6 md:w-1/2 rounded-2xl overflow-hidden" />
          </div>
          <div className="flex justify-center">
            <div className="w-5/6 md:w-1/2">
              <div className="font-bold text-2xl my-5 ">{info.course_name}</div>
              <div className="flex gap-5 border-b py-5">
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
              {/* <div>
              <div className="font-bold text-lg">Book my time inline mode:</div>
              <InlineWidget url="https://calendly.com/ricardocao-biker" />
            </div> */}
              <div className='flex justify-between py-5'>
                <Button onClick={() => handleBack()}>Back</Button>
                <MainButton onClick={() => handleEnroll()}>Enroll Now</MainButton>
              </div>
            </div>
          </div>
        </div>
      }
      <Footer />
    </>
  );
};