 
import {Button, Input, Form, Carousel} from "antd";
import {RightOutlined} from "@ant-design/icons";
import {useTranslation} from "react-i18next";
import { Link } from "react-router-dom";
// import {useRouter} from "next/router";

const labelStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  padding: "0.5rem 3rem",
  transform: "translate(-50%, -50%)",
  borderRadius: "0.5rem",
};

const Hero = () => {
  const {t,i18n } = useTranslation("common");
  const locale = i18n.language;
  return (
    <>
      <Carousel effect="fade" autoplay autoplaySpeed={4000} swipeToSlide draggable className="" style={{minHeight: "calc(100vw * 0.30)"}}>
        <div className="flex-force w-full md:w-5/6 justify-center">
          <div
            className="absolute top-1/2 left-1/2 text-xl text-white md:text-4xl lg:text-8xl PlaypenSans"
            style={labelStyle}
          >
            {t("learn")}
          </div>
          <img
            src={"/banner/home_banner1.png"}
            alt="Hero Illustration"
            className="w-full md:w-5/6 rounded-lg"
          />
        </div>
        <div className="flex-force w-full md:w-5/6 justify-center">
          <div
            className="absolute top-1/2 left-1/2 text-xl text-white md:text-4xl lg:text-8xl PlaypenSans"
            style={labelStyle}
          >
            {t("grow")}
          </div>
          <img
            src={"/banner/home_banner2.png"}
            alt="Hero Illustration"
            className="w-full md:w-5/6 rounded-lg"
          />
        </div>
        <div className="flex-force w-full md:w-5/6 justify-center">
          <div
            className="absolute top-1/2 left-1/2 text-xl text-white md:text-4xl lg:text-8xl PlaypenSans"
            style={labelStyle}
          >
            {t("excel")}
          </div>
          <img
            src={"/banner/home_banner3.png"}
            alt="Hero Illustration"
            className="w-full md:w-5/6 rounded-lg"
          />
        </div>
      </Carousel>
      <div>
        <div className="flex justify-center pt-10">{t("more-about-gow")}</div>
        <div className="flex justify-center">
          <div className="lg:w-1/2 py-5 md:flex justify-between">
            <Button type="link" className="flex">
              <Link
                to="/partner"
                className="sm:text-sm lg:text-xl flex items-center gap-2 font-bold"
                style={{color: "#f05622"}}
              >
                {t("become-partner")}
                <RightOutlined />
              </Link>
            </Button>
            <Button type="link" className="flex">
              <Link
                to="/contact"
                className="sm:text-sm lg:text-xl flex items-center gap-2 font-bold"
                style={{color: "#f05622"}}
              >
                {t("course-advise")}
                <RightOutlined />
              </Link>
            </Button>
            <Button type="link" className="flex">
              <Link
                to="/studyoversea/university"
                className="sm:text-sm lg:text-xl flex items-center gap-2 font-bold"
                style={{color: "#f05622"}}
              >
                {t("find-my-university")}
                <RightOutlined />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* 收集邮件订阅 */}
      <div
        className="w-full flex justify-center mt-5 h-60 lg:mt-10 h-auto lg:h-72"
        style={{backgroundColor: "#0d7a98"}}
      >
        <div className="relative p-5 lg:p-0 flex gap-5">
          <div className="hidden lg:block lg:w-60" style={{width: '220px'}}>
            <img
              className="absolute bottom-0 left-0 h-auto"
              src={"/img/robert.png"}
              alt="x"
              width="220"
              height="320"
            />
          </div>
          <div className="text-white right-0 py-5">
            {/* <div className="block lg:hidden">
              <img className="" src={"/img/home-asscimg.png"} alt="x" />
            </div> */}
            {locale === "en" && (
              <div className="flex flex-col items-center h-full max-w-md">
                <div>
                  <div className="text-2xl my-3.5">{t("email-subscription")}</div>
                  <div className="text-base">{t("email-subscription-desc")}</div>
                  <div className="text-base">{t("subscribtion-cancel")}</div>
                </div>
                <div className="flex lg:hidden mt-5">
                  <Link to="/subscribe">
                    <Button className="bg-white w-full lg:w-auto flex items-center" style={{background: "#f05622", color: "#fff", border: 'none'}}>{t('read-more')}<RightOutlined /></Button>
                  </Link>
                </div>
              </div>
            )}
            {locale === "zh" && (
              <div className="py-1 lg:py-7 gap-6 lg:pl-10 h-full">
                <div className="text-xl font-bold lg:text-2xl">扫码添加Robert教授微信</div>
                <div className="h-full p-5 flex justify-center">
                  <img className="h-full lg:h-full" src={"/qr/wechat.jpeg"} />
                </div>
              </div>
            )}
          </div>
          {
            locale === 'en' && (<div className="items-center hidden lg:flex">
              <Link to="/subscribe">
                <Button className="bg-white w-full lg:w-auto flex items-center" style={{background: "#f05622", color: "#fff", border: 'none'}}>{t('read-more')}<RightOutlined /></Button>
              </Link>
            </div>)
          }
        </div>
      </div>
    </>
  );
};

export default Hero;
