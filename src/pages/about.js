import Footer from "../components/footer";

import Navbar from "../components/navbar";
import {useTranslation} from "react-i18next";
import {HeadingSection} from "../components/headingSection";


const About = () => {
  const {t} = useTranslation("common");
  return (
    <>

      <Navbar />
      <div className="w-full flex justify-center pb-5">
        <img src="/img/IMG_0802.png" alt="university" className="w-full md:max-w-screen-xl block rounded-lg" />
      </div>
      <div className="flex justify-center">
        <HeadingSection img={'/img/icon_icon_Get connected.png'} header={'About Us'} desc={t('course-advise-desc')} />
      </div>
      <div className="flex w-full justify-center p-10">
        <div className="w-full md:max-w-screen-xl flex">
          <div className="pr-0 md:pr-10">
            {/* <div>
              <div style={{color: '#f05622'}} className="font-bold text-3xl pb-5">{t("about-us")}</div>
            </div> */}
            <div
              dangerouslySetInnerHTML={{__html: t("about-us-content")}}
            ></div>
          </div>
          <div className="hidden md:block" style={{minWidth: '150px'}}>
            <img className="pb-5 rounded-full" width="130px" src="/img/about_v2.png" />
            <img className="pb-5 " width="130px" src="/img/about_logo.png" />
            <img className="pb-5 " width="130px" src="/img/Waratah100.png" />
            <img className="" width="130px" src="/img/View-logo@2x.png" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;