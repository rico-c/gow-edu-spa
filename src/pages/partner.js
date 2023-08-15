import Footer from "../components/footer";

import Navbar from "../components/navbar";
import PartnerForm from "../components/partner";
import {useTranslation} from "react-i18next";
import {HeadingSection} from "../components/headingSection";
import {RightOutlined} from "@ant-design/icons";
import {Button} from "antd"


const Partner = () => {
  const {t} = useTranslation("common");
  return (
    <>

      <Navbar />
      <div>
        <div>
          <img src="/img/course_advice.jpg" alt="university" className="w-full" />
        </div>
        <div className="flex justify-center">
          <HeadingSection img={'/img/Icon--Leader Prep.png'} header={t('partner-title')} desc={t('oversea-desc')} />
        </div>
        <div className="text-center pb-10 font-bold flex items-center justify-center flex-col md:flex-row">{t('partner-pdf')}<Button type="link" className="text-base font-bold flex items-center">{t("parter-program")}<RightOutlined /></Button></div>
        <div style={{background: 'rgb(246, 246, 246)'}}><PartnerForm /></div>
      </div>
      <Footer />
    </>
  );
};

export default Partner;
