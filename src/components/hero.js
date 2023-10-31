
import {Button, Input, Form, Carousel, message, Checkbox} from "antd";
import {RightOutlined} from "@ant-design/icons";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
// import {useRouter} from "next/router";
import {fetchNewLetter} from "../api/new-letter";
import {checkEmailFormat} from "../utils/checkFormat";
import {useState} from "react";

const labelStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  padding: "0.5rem 3rem",
  transform: "translate(-50%, -50%)",
  borderRadius: "0.5rem",
};

const Hero = () => {
  const {t, i18n} = useTranslation("common");
  const locale = i18n.language;

  const [messageApi, contextHolder] = message.useMessage();

  const [isAgree, setAgree] = useState(true);

  const onChange = (e) => {
    setAgree(e.target.checked);
  };

  const handleNewLetter = async (data) => {
    if (!isAgree) {
      messageApi.open({
        type: "error",
        content: t("subscribe-error"),
      });

      return;
    }
    const {name, email} = data;
    if (!name || !email) {
      messageApi.open({
        type: "error",
        content: t("subscribe-param"),
      });

      return;
    }
    if (!checkEmailFormat(email)) {
      messageApi.open({
        type: "error",
        content: t("subscribe-format"),
      });

      return;
    }
    const res = await fetchNewLetter({
      first_name: name,
      email_address: email,
    });
    if (res.data === "success") {
      messageApi.open({
        type: "success",
        content: t("subscribe-callback"),
      });
    }
  };

  return (
    <>
      <Carousel effect="fade" autoplay autoplaySpeed={4000} swipeToSlide draggable className="" style={{minHeight: "calc(100vw * 0.20)"}}>
        <div className="flex-force w-full flex justify-center">
          <div
            className="absolute top-1/2 left-1/2 text-xl text-white md:text-4xl lg:text-8xl PlaypenSans"
            style={labelStyle}
          >
            {t("learn")}
          </div>
          <img
            src={"/banner/home_banner1.png"}
            alt="Hero Illustration"
            className="md:max-w-screen-xl rounded-lg"
          />
        </div>
        <div className="flex-force w-full flex justify-center">
          <div
            className="absolute top-1/2 left-1/2 text-xl text-white md:text-4xl lg:text-8xl PlaypenSans"
            style={labelStyle}
          >
            {t("grow")}
          </div>
          <img
            src={"/banner/home_banner2.png"}
            alt="Hero Illustration"
            className="md:max-w-screen-xl rounded-lg"
          />
        </div>
        <div className="flex-force w-full flex justify-center">
          <div
            className="absolute top-1/2 left-1/2 text-xl text-white md:text-4xl lg:text-8xl PlaypenSans"
            style={labelStyle}
          >
            {t("excel")}
          </div>
          <img
            src={"/banner/home_banner3.png"}
            alt="Hero Illustration"
            className="md:max-w-screen-xl rounded-lg"
          />
        </div>
      </Carousel>
      <div>
        <div className="flex justify-center pt-5 md:pt-10">{t("more-about-gow")}</div>
        <div className="flex justify-center">
          <div className="lg:w-1/2 md:py-5 md:flex justify-between items-center">
            <Button type="link" className="flex">
              <Link
                to="/partner"
                className="sm:text-sm lg:text-xl flex justify-center items-center gap-2 font-bold"
                style={{color: "#f05622"}}
              >
                {t("become-partner")}
                <RightOutlined />
              </Link>
            </Button>
            <Button type="link" className="flex">
              <Link
                to="/studyoversea/advise"
                className="sm:text-sm lg:text-xl flex justify-center items-center gap-2 font-bold"
                style={{color: "#f05622"}}
              >
                {t("course-advise")}
                <RightOutlined />
              </Link>
            </Button>
            <Button type="link" className="flex">
              <Link
                to="/studyoversea/university"
                className="sm:text-sm lg:text-xl flex justify-center items-center gap-2 font-bold"
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
        className="w-full flex justify-center mt-2 lg:mt-10 h-auto lg:h-72"
        style={{backgroundColor: "#0d7a98"}}
      >
        <div className="relative px-5 md:px-5 md:py-5 lg:p-0 flex gap-5">
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
              <div>
                <div className="flex flex-col items-center h-full max-w-2xl">
                  <div>
                    <div className="text-lg md:text-2xl my-2 font-semibold" dangerouslySetInnerHTML={{__html: t("email-subscription")}}></div>
                    <div className="text-base">{t("email-subscription-desc")}</div>
                    <div className="text-base">{t("subscribtion-cancel")}</div>
                  </div>
                  {/* <div className="flex lg:hidden mt-5">
                  <Link to="/subscribe">
                    <Button className="bg-white w-full lg:w-auto flex items-center" style={{background: "#f05622", color: "#fff", border: 'none'}}>{t('read-more')}<RightOutlined /></Button>
                  </Link>
                </div> */}
                </div>
                <Form
                  layout="horizontal"
                  className="text-center lg:text-left text-white"
                  onFinish={handleNewLetter}
                >
                  <div className="pt-5 gap-6">
                    <div className="md:flex gap-3">
                      <div>
                        {/* <div>{t("name")}</div> */}
                        <Form.Item name="first-name">
                          <Input className="w-full md:w-48" placeholder="Your first name"/>
                        </Form.Item>
                      </div>
                      <div>
                        {/* <div>{t("name")}</div> */}
                        <Form.Item name="lastname">
                          <Input className="w-full md:w-48" placeholder="Your last name"/>
                        </Form.Item>
                      </div>
                      <div>
                        {/* <div>{t("email")}</div> */}
                        <Form.Item name="email">
                          <Input className="w-full md:w-48" placeholder="Your email"/>
                        </Form.Item>
                      </div>
                    </div>
                    <div className="pb-5 md:flex items-center gap-1">
                      <Checkbox
                        checked={isAgree}
                        onChange={onChange}
                        className="pr-2"
                      />
                      I agree to the
                      <Link to="/terms" className="pl-1 md:pl-0 underline">
                        terms and conditions.
                      </Link>
                      <Button
                        className="bg-white w-full lg:w-auto md:ml-10 mt-5 md:mt-0"
                        htmlType="submit"
                        style={{background: "#f05622", color: "#fff"}}
                      >
                        {'Subscribe now'}
                      </Button>
                    </div>
                  </div>
                </Form>
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
          {/* {
            locale === 'en' && (<div className="items-center hidden lg:flex">
              <Link to="/subscribe">
                <Button className="bg-white w-full lg:w-auto flex items-center" style={{background: "#f05622", color: "#fff", border: 'none'}}>{t('read-more')}<RightOutlined /></Button>
              </Link>
            </div>)
          } */}
        </div>
      </div>
    </>
  );
};

export default Hero;
