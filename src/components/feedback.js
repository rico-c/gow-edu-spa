import React from "react";
import Container from "./container";
import { useTranslation } from "react-i18next";

const QuoteIcon = ({rightside}) => {
  return <img className={`absolute w-7 h-7 ${rightside ? 'right-10' : 'left-10'}`} style={{top: '-10px', transform: rightside ? 'rotateY(180deg)' : 'null' }} src={"/img/home-marks2.png"} />;
};

const Feedback = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <div
        className="w-full h-20 flex justify-center items-center gap-5"
        style={{ backgroundColor: "#0d7a98" }}
      >
        <span style={{width: '50px', height: '2px', backgroundColor: '#fff'}}></span>
        <span className="text-white font-bold">{t("feedback")}</span>
        <span style={{width: '50px', height: '2px', backgroundColor: '#fff'}}></span>
      </div>
      <Container className="md:w-3/4 flex-wrap mb-5 lg:gap-10 lg:flex-nowrap ">
        <div className="md:flex py-5">
          <div className="md:mb-5 md:w-1/2">
            <img
              className="object-cover w-full h-full rounded relative md:left-5 md:bottom-5 -z-1"
              src={"/img/home-note1.png"}
              alt="note"
            />
          </div>
          <div className="shadow p-5 md:w-1/2 mt-5 md:mt-0 relative md:p-10 bg-white rounded feedback-card-shadow">
            <QuoteIcon rightside />
            <div dangerouslySetInnerHTML={{ __html: t("feedback-1") }}></div>
          </div>
        </div>
        <div className="md:flex py-5">
          <div className="hidden md:block shadow p-5 md:w-1/2 mt-5 md:mt-0 relative md:p-10 bg-white rounded feedback-card-shadow">
            <QuoteIcon />
            <div dangerouslySetInnerHTML={{ __html: t("feedback-2") }}></div>
          </div>
          <div className="md:mb-5 md:w-1/2">
            <img
              className="object-cover w-full h-full rounded relative md:right-5 md:bottom-5 -z-1"
              src={"/img/home-note2.png"}
              alt="note"
            />
          </div>
          <div className="block md:hidden shadow p-5 md:w-1/2 mt-5 md:mt-0 relative md:p-10 bg-white rounded feedback-card-shadow">
            <QuoteIcon />
            <div dangerouslySetInnerHTML={{ __html: t("feedback-2") }}></div>
          </div>
        </div>
        <div className="md:flex py-5">
          <div className="md:mb-5 md:w-1/2">
            <img
              className="object-cover w-full h-full rounded relative md:left-5 md:bottom-5 -z-1"
              src={"/img/home-note3.png"}
              alt="note"
            />
          </div>
          <div className="shadow p-5 md:w-1/2 mt-5 md:mt-0 relative md:p-10 bg-white rounded feedback-card-shadow">
            <QuoteIcon rightside />
            <div dangerouslySetInnerHTML={{ __html: t("feedback-3") }}></div>
          </div>
        </div>
        <div className="md:flex py-5">
          <div className="hidden md:block shadow p-5 md:w-1/2 mt-5 md:mt-0 relative md:p-10 bg-white rounded feedback-card-shadow">
            <QuoteIcon />
            <div dangerouslySetInnerHTML={{ __html: t("feedback-4") }}></div>
          </div>
          <div className="md:mb-5 md:w-1/2">
            <img
              className="object-cover w-full h-full rounded relative md:right-5 md:bottom-5 -z-1"
              src={"/img/home-note4.png"}
              alt="note"
            />
          </div>
          <div className="block md:hidden shadow p-5 md:w-1/2 mt-5 md:mt-0 relative md:p-10 bg-white rounded feedback-card-shadow">
            <QuoteIcon />
            <div dangerouslySetInnerHTML={{ __html: t("feedback-4") }}></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Feedback;
