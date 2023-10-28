import Footer from "../components/footer";

import Navbar from "../components/navbar";
import {useTranslation} from "react-i18next";
import {HeadingBlock} from "../components/headingBlock";
import {StudyForm} from "../components/studyform";

const PhdReady = () => {
  const {t} = useTranslation("common");
  return (
    <>

      <Navbar />
      <div >
        <div>
          <HeadingBlock smallIcon bg="/img/IMG_6762.png" img={'/icon/icon_phD preparation@3x.png'} header={'PhD Preparation'} desc={t('oversea-desc')} />
          <div className="flex justify-center pb-10">
            <div className="block w-full md:flex md:max-w-screen-xl md:pl-10">
              <div className="flex-1">
                <div className="pl-10 md:pl-10 pr-10" >
                  WIP
                </div>
              </div>
              <div className="px-10 md:px-0 md:w-1/4 rounded-lg overflow-hidden" style={{minWidth: '320px'}}>
                <StudyForm shadow />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PhdReady;
