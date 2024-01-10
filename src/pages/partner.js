import Footer from "../components/footer";

import Navbar from "../components/navbar";
import PartnerForm from "../components/partner";
import PartnerDetail from "../components/partnerDetail";
import {useTranslation} from "react-i18next";
import {HeadingBlock} from "../components/headingBlock";
import {RightOutlined} from "@ant-design/icons";
import {Button, Checkbox} from "antd"
import {useState} from "react";
import {LessonItem} from "../components/lesson";

const Partner = () => {
  const {t} = useTranslation("common");

  const [step, setStep] = useState(1);
  const [step1Data, setStep1Data] = useState({});

  const [agreeTerms, setAgreeTerms] = useState(false)

  const CheckBoxLine = step === 1 ? <>
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
  </> : null;

  return (
    <>

      <Navbar />
      <div>
        <HeadingBlock smallIcon bg="/img/course_advice.jpg" step={step} img={'/img/WechatIMG1663.png'} header={t('partner-title')} desc={t('lesson-desc3')} />

        <div className="md:flex md:max-w-screen-xl m-auto">
          <div className="">
            <div className="w-5/6 m-auto md:w-full pb-5 md:px-16">
              <div className="font-bold text-xl main-color mb-5 whitespace-break-spaces">
                {t('affiliate-programs')}
              </div>
              <div className="whitespace-break-spaces">
                {t('affiliate-desc')}
              </div>
            </div>

            <div >
              {step === 1 ? <PartnerForm
                checkBoxLine={CheckBoxLine}
                onEnter={(data) => {
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

            <div className="w-5/6 m-auto md:w-full md:px-16 md:py-10 mb-5">
              <div className="font-bold text-xl main-color mb-5 whitespace-break-spaces">
                {t('affiliate-title2')}
              </div>
              <div className="whitespace-break-spaces">
                {t('affiliate-desc2')}
                <button className="main-color"> Gow Education Consultant</button>
              </div>
            </div>
          </div>
          <div className="hidden md:block px-10 md:px-0 md:w-1/4 rounded-lg overflow-hidden mb-5" style={{minWidth: '320px'}}>
            <LessonItem
              isCol
              roundIcon
              icon={"/img/heading-master.jpg"}
              title={t('master')}
              desc={t("masterclass-sidebar-desc")}
              link="/masterclass"
            />
            <LessonItem
              isCol
              roundIcon
              icon={"/img/heading-partner.jpg"}
              title={t('become-partner')}
              desc={t("partner-sidebar-desc")}
              link="/partner"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Partner;
