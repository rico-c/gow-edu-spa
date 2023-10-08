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
import {InlineWidget, PopupWidget, PopupButton} from "react-calendly";

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
            <div>
              <div className="font-bold text-lg">Book my time inline mode:</div>
              <InlineWidget url="https://calendly.com/ricardocao-biker" />
            </div>
            <div>
              <div className="font-bold text-lg">Book my time popup mode:</div>
              <PopupWidget
                url="https://calendly.com/ricardocao-biker"
                /*
                 * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                 * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                 */
                rootElement={document.getElementById("root")}
                text="Click here to schedule!"
                textColor="#ffffff"
                color="#00a2ff"
              />
              <PopupButton
                className="border"
                url="https://calendly.com/ricardocao-biker"
                /*
                 * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                 * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                 */
                rootElement={document.getElementById("root")}
                text="Click here to schedule!"
              />
            </div>
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