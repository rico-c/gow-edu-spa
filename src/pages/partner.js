import Footer from "../components/footer";

import Navbar from "../components/navbar";
import PartnerForm from "../components/partner";
import PartnerDetail from "../components/partnerDetail";
import {useTranslation} from "react-i18next";
import {HeadingSection} from "../components/headingSection";
import {RightOutlined} from "@ant-design/icons";
import {Button} from "antd"
import {useState} from "react";

const Partner = () => {
  const {t} = useTranslation("common");

  const [step, setStep] = useState(1);

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
        <div style={{background: 'rgb(246, 246, 246)'}}>
          {step === 1 ? <PartnerForm onEnter={() => setStep(2)} /> : <PartnerDetail onCancel={() => setStep(1)} />}</div>
      </div>
      <Footer />
    </>
  );
};

export default Partner;
