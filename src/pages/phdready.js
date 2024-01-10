import Footer from "../components/footer";

import Navbar from "../components/navbar";
import {useTranslation} from "react-i18next";
import {HeadingBlock} from "../components/headingBlock";
import {StudyForm} from "../components/studyform";
import {LessonItem} from "../components/lesson";
import {Link} from "react-router-dom";
import {RightOutlined} from "@ant-design/icons";
import {Button} from "antd";

const PhdReady = () => {
  const {t} = useTranslation("common");
  return (
    <>

      <Navbar />
      <div >
        <div>
          <HeadingBlock smallIcon bg="/img/IMG_6762.png" img={'/icon/icon_phD preparation@3x.png'} header={t('phd-pre')} desc={t('phd-desc')} />
          <div className="flex justify-center pb-10">
            <div className="block w-full md:flex md:max-w-screen-xl md:pl-10">
              <div className="flex-1">
                <div className="pl-10 md:pl-10 pr-10" >
                  <div className="font-bold text-xl main-color mb-5">PhD Masterclasses</div>

                  Our on-line Masterclasses will assist you in a number of ways to confidently approach your PhD. Highly relevant and helpful courses will prepare you to navigate the process for applying for a PhD including writing your Statement of Research Interests and your PhD Proposal.
                  <Link to={'/masterclass'}>
                    <Button style={{background: "#f05622", color: "#fff"}} className="mt-5 flex items-center">
                      {t("read-more")}
                      <RightOutlined />
                    </Button>
                  </Link>
                  <div className="font-bold text-xl main-color my-5">PhD Coaching</div>

                  Preparing for a PhD can be complex and demanding however we can help by walking alongside you in the journey. The good news is you are not alone. You can have your own one-on-one PhD Coach who has been through the process before having already done their own PhD. Your PhD Coach will guide you through the process in a structured manner over a period of time.
                  <Link to={'/home'}>
                    <Button style={{background: "#f05622", color: "#fff"}} className="mt-5 flex items-center">
                      {t("read-more")}
                      <RightOutlined />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block px-10 md:px-0 md:w-1/4 rounded-lg overflow-hidden" style={{minWidth: '320px'}}>
                {/* <StudyForm shadow /> */}
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PhdReady;
