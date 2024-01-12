import Footer from "../components/footer";

import Navbar from "../components/navbar";
import {useTranslation} from "react-i18next";
import {HeadingBlock} from "../components/headingBlock";


const About = () => {
  const {t} = useTranslation("common");
  return (
    <>

      <Navbar />
      <HeadingBlock bg="/img/randomcoolpicshutterstock_2136407259.png" img={'/img/icon_icon_Get connected.png'} header={t('about-us')} desc={t('about-us-desc')} />
      <div className="flex w-full justify-center pt-5 pb-20">
        <div className="w-full md:max-w-screen-xl flex px-10 md:px-20">
          <div className="pr-0 md:pr-10 md:w-3/4">
            {/* <div>
              <div style={{color: '#f05622'}} className="font-bold text-3xl pb-5">{t("about-us")}</div>
            </div> */}
            <div className="whitespace-break-spaces"> {t('about-us-main')}</div>
          </div>
          <div className="hidden md:flex flex-col items-center md:w-1/4">
            {/* <img className="pb-5 rounded-full" width="130px" src="/img/about_v2.png" /> */}
            <img className="pb-12 " width="170px" src="/img/about_logo.png" />
            {/* <img className="pb-5 " width="130px" src="/img/Waratah100.png" /> */}
            <img className="" width="150px" src="/img/View-logo@2x.png" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;