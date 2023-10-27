import Navbar from "../../components/navbar";
import {useTranslation} from "react-i18next";
import {HeadingBlock} from '../../components/headingBlock'
import {StudyForm} from "../../components/studyform";

const Advise = () => {
  const {t} = useTranslation("common");

  return (
    <>
      <Navbar />
      <div>

        <HeadingBlock smallIcon bg="/img/Course advice_shutterstock_2033930096.png" img={'/img/icon_Live Masterclass.png'} header={t('course-advise')} desc={t('course-advise-desc')} />
        <div className="flex justify-center pb-10">
          <div className="block md:flex md:max-w-screen-xl md:px-10">
            <div className="flex-1">
              <div className="pl-10 md:pl-0 pr-10" >
                WIP
              </div>
            </div>
            <div className="px-10 md:px-0 md:w-1/4" style={{minWidth: '300px'}}>
              <StudyForm shadow />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advise;
