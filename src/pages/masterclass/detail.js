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
import {Button} from "antd";
import {InlineWidget} from "react-calendly";

export const Detail = () => {
  const {t} = useTranslation("common");
  let history = useHistory();

  const handleEnroll = () => {
    history.push('/masterclass/enroll/1')
  }

  const handleBack = () => {
    history.go(-1)
  }

  return (
    <>
      <Navbar />
      <div>
        <div>
          <img src="/img/Masterclasses.jpg" alt="university" className="w-full" />
        </div>
        <div className="flex justify-center">
          <div className="w-5/6 md:w-1/4">
            <div className="font-bold text-2xl my-5 main-color">Creative and Critcal Thinking</div>
            <div className="flex gap-5 border-b py-5">
              <div>
                <img src="/img/about_v2.png" className="rounded-full w-20" />
              </div>
              <div>
                <div className="font-bold text-lg">Presenter:</div>
                <div>Dr Robert Gow</div>
              </div>
            </div>
            <div className="border-b py-5">
              <div className="font-bold text-lg">Language:</div>
              <div>English</div>
            </div>
            <div className="border-b py-5">
              <div className="font-bold text-lg">Duration:</div>
              <div>1 hour session</div>
            </div>
            <div className="border-b py-5">
              <div className="font-bold text-lg">Description:</div>
              <div>1 hour session1 hour session1 hour session1 hour session1 hour session1 hour session1 hour session</div>
            </div>
            <di>
              <div className="font-bold text-lg">Book my timeinline:</div>
              <InlineWidget url="https://calendly.com/ricardocao-biker" />
            </di>
            <div className='flex justify-between py-5'>
              <Button onClick={() => handleBack()}>Back</Button>
              <Button onClick={() => handleEnroll()}>Enroll Now</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};