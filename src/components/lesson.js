import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {RightOutlined} from "@ant-design/icons";
import {Button} from "antd";

export const LessonItem = ({icon, title, desc, link, isCol, roundIcon, smallIcon}) => {
  const {t} = useTranslation("common");
  return (
    <div className="flex justify-center mt-5 border rounded">
      <div className={`flex shadow rounded-lg bg-white ${isCol ? 'flex-col md:w-80 items-center' : ''}`}>
        <div
          style={{width: isCol ? "200px" : "410px", minWidth: isCol ? "200px" : "200px"}}
          className={`hidden md:flex justify-center items-center ${isCol ? 'flex justify-center p-5' : 'p-5 border-r'}`}
        >
          <img width={smallIcon ? "155" : roundIcon ? "140" : "130"} src={icon} className={`${roundIcon ? 'rounded-full' : ''}`} alt="" />
        </div>
        <div className={isCol ? "p-8 pt-2" : "p-10"}>
          <div className="text-xl font-bold main-color">{title}</div>
          <div>{desc}</div>
          <div className="pt-5">
            <Link to={link}>
              <Button style={{background: "#f05622", color: "#fff"}} className="flex items-center">
                {t("read-more")}
                <RightOutlined />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Lesson = () => {
  const {t} = useTranslation("common");
  return (
    <div style={{backgroundColor: '#f6f6f6'}} className="py-5 flex justify-center">
      <div className="w-5/6 md:max-w-screen-lg">
        <LessonItem
          icon={"/img/Icon-Turnitin Feedback.png"}
          title={t("lesson-title1")}
          desc={t("lesson-desc1")}
          link="/masterclass"
        />
        <LessonItem
          icon={"/img/Icon--Leader Prep.png"}
          title={t("lesson-title2")}
          desc={t("lesson-desc2")}
          link="/studyoversea"
        />
        <LessonItem
          smallIcon
          icon={"/icon/icon_phD preparation@3x.png"}
          title={t("lesson-title3")}
          desc={t("lesson-desc3")}
          link="/phdready"
        />
        <LessonItem
          smallIcon
          icon={"/img/WechatIMG1663.png"}
          title={"Become a partner"}
          desc={t("lesson-desc3")}
          link="/partner"
        />
      </div>
    </div>
  );
};

export default Lesson;
