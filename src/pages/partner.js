import Footer from "../components/footer";

import Navbar from "../components/navbar";
import PartnerForm from "../components/partner";
import PartnerDetail from "../components/partnerDetail";
import {useTranslation} from "react-i18next";
import {HeadingSection} from "../components/headingSection";
import {RightOutlined} from "@ant-design/icons";
import {Button, Checkbox} from "antd"
import {useState} from "react";

const Partner = () => {
  const {t} = useTranslation("common");

  const [step, setStep] = useState(1);
  const [step1Data, setStep1Data] = useState({});

  const [agreeTerms, setAgreeTerms] = useState(false)

  console.log(4, agreeTerms);

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
        <div className="text-center pb-10 px-10 font-bold md:flex-row">
          <Checkbox className="mr-2" value={agreeTerms} onChange={val => {console.log(val); setAgreeTerms(val.target.checked)}}> {t('partner-pdf')}</Checkbox>
          <Button type="link" className="text-base font-bold">{t("terms-conditions")}<RightOutlined /></Button>
        </div>
        <div style={{background: 'rgb(246, 246, 246)'}}>
          {step === 1 ? <PartnerForm onEnter={(data) => {setStep(2); setStep1Data(data)}} /> : <PartnerDetail agreeTerms={agreeTerms} step1Data={step1Data} onCancel={() => setStep(1)} />}</div>
      </div>
      <Footer />
    </>
  );
};

export default Partner;
