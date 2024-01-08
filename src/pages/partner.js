import Footer from "../components/footer";

import Navbar from "../components/navbar";
import PartnerForm from "../components/partner";
import PartnerDetail from "../components/partnerDetail";
import {useTranslation} from "react-i18next";
import {HeadingBlock} from "../components/headingBlock";
import {RightOutlined} from "@ant-design/icons";
import {Button, Checkbox} from "antd"
import {useState} from "react";

const Partner = () => {
  const {t} = useTranslation("common");

  const [step, setStep] = useState(1);
  const [step1Data, setStep1Data] = useState({});

  const [agreeTerms, setAgreeTerms] = useState(false)

  return (
    <>

      <Navbar />
      <div>
        <HeadingBlock smallIcon bg="/img/course_advice.jpg" step={step} img={'/img/WechatIMG1663.png'} header={t('partner-title')} desc={t('lesson-desc3')} />
        {
          step === 1 && <>
            <div className="text-center pb-10 px-10  md:flex-row flex items-center justify-center flex-wrap">
              <Checkbox className="mr-2 flex items-center" value={agreeTerms} onChange={val => {setAgreeTerms(val.target.checked)}}>
                {t('partner-pdf')}
                <Button onClick={e => {
                  e.stopPropagation();
                  e.preventDefault();
                }} type="link" className="align-middle px-1">
                  {t("terms-conditions")}
                  <RightOutlined className="align-middle" />
                </Button></Checkbox>
            </div>
          </>
        }

        <div style={{background: 'rgb(246, 246, 246)'}}>
          {step === 1 ? <PartnerForm onEnter={(data) => {
            if (!agreeTerms) {
              alert('please read and agree our terms and conditions firstly')
              return;
            }
            setStep(2);
            setStep1Data(data)
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }} /> : <PartnerDetail agreeTerms={agreeTerms} step1Data={step1Data} onCancel={() => setStep(1)} />}</div>
      </div>
      <Footer />
    </>
  );
};

export default Partner;
