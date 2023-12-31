import {useEffect} from "react";

import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Feedback from "../components/feedback";
import Lesson from "../components/lesson";
import Footer from "../components/footer";
import {useTranslation} from "react-i18next";
import {WechatFloat} from "../components/wechatfloat";

const Home = () => {
  const {t} = useTranslation("common");

  useEffect(() => {
    (window).$crisp = [];
    (window).CRISP_WEBSITE_ID = "e60fe710-4049-471d-8dab-b61e41152145";
    let d = document;
    let s = d.createElement("script");
    s.src = "https://client.crisp.chat/l.js";
    (s).async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <SectionTitle
        pretitle=""
        align="left"
        title={t('slogan3')}>
        {t('value-desc')}
      </SectionTitle>
      <div className="flex justify-center relative pb-5">
        <img className="rounded-lg md:max-w-screen-lg" src={'/img/welcome.png'} fill="true" alt={'welcome'} />
        <div className="absolute text-white top-1/2 text-2xl md:text-5xl lg:text-8xl shadow-lg" style={{transform: "translateY(-50%)"}}>{t('logo')}</div>
      </div>
      <Lesson />
      <Feedback />
      <Footer />
    </>
  );
}

export default Home;