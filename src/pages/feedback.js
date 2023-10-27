import Footer from "../components/footer";

import Navbar from "../components/navbar";
import Container from "../components/container";
import {useTranslation} from "react-i18next";
import {HeadingBlock} from "../components/headingBlock";

const QuoteIcon = ({rightside}) => {
  return <img className={`absolute w-7 h-7 ${rightside ? 'right-10' : 'left-10'}`} style={{top: '-10px', transform: rightside ? 'rotateY(180deg)' : 'null'}} src={"/img/home-marks2.png"} />;
};

const Testimonials = () => {
  const {t} = useTranslation("common");

  return (
    <>

      <Navbar />
      <>
        <HeadingBlock bg="/img/imge00.png" img={'/img/Icon-Performance Coaching@2x.png'} header={'Feedback'} desc={t('course-advise-desc')} />
        {/* <div
          className="w-full h-20 flex gap-5 justify-center items-center"
          style={{backgroundColor: "#0d7a98"}}
        >
          <span style={{width: '50px', height: '2px', backgroundColor: '#fff'}}></span>
          <span className="text-white font-bold">{t("feedback")}</span>
          <span style={{width: '50px', height: '2px', backgroundColor: '#fff'}}></span>
        </div> */}
        <Container className="md:w-3/4 flex-wrap mb-5 lg:gap-10 lg:flex-nowrap ">
          <div className="md:flex py-5">
            <div className="md:mb-5 md:w-1/2">
              <img
                className="object-cover w-full h-full rounded relative md:left-5 md:bottom-5 -z-1"
                src={"/img/testimonials1.png"}
                alt="note"
              />
            </div>
            <div className="feedback-card-shadow p-5 md:mb-5 md:w-1/2 mt-5 md:mt-0 relative md:p-10 bg-white rounded">
              <QuoteIcon rightside />
              <div dangerouslySetInnerHTML={{__html: t("testimonials-1")}}></div>
            </div>
          </div>
          <div className="md:flex py-5">
            <div className="hidden md:block feedback-card-shadow p-5 md:mb-5 md:w-1/2 mt-5 md:mt-0 relative md:p-10 bg-white rounded">
              <QuoteIcon />
              <div dangerouslySetInnerHTML={{__html: t("testimonials-2")}}></div>
            </div>
            <div className="md:mb-5 md:w-1/2">
              <img
                className="object-cover w-full h-full rounded relative md:right-5 md:bottom-5 -z-1"
                src={"/img/testimonials2.png"}
                alt="note"
              />
            </div>
            <div className="block md:hidden feedback-card-shadow p-5 md:mb-5 md:w-1/2 mt-5 md:mt-0 relative md:p-10 bg-white rounded">
              <QuoteIcon />
              <div dangerouslySetInnerHTML={{__html: t("testimonials-2")}}></div>
            </div>
          </div>
          <div className="md:flex py-5">
            <div className="md:mb-5 md:w-1/2">
              <img
                className="object-cover w-full h-full rounded relative md:left-5 md:bottom-5 -z-1"
                src={"/img/testimonials3.png"}
                alt="note"
              />
            </div>
            <div className="feedback-card-shadow p-5 md:mb-5 md:w-1/2 mt-5 md:mt-0 relative md:p-10 bg-white rounded">
              <QuoteIcon rightside />
              <div dangerouslySetInnerHTML={{__html: t("testimonials-3")}}></div>
            </div>
          </div>
          <div className="md:flex py-5">
            <div className="hidden md:block feedback-card-shadow p-5 md:mb-5 md:w-1/2 mt-5 md:mt-0 relative md:p-10 bg-white rounded">
              <QuoteIcon />
              <div dangerouslySetInnerHTML={{__html: t("testimonials-4")}}></div>
            </div>
            <div className="md:mb-5 md:w-1/2">
              <img
                className="object-cover w-full h-full rounded relative md:right-5 md:bottom-5 -z-1"
                src={"/img/testimonials4.png"}
                alt="note"
              />
            </div>
            <div className="block md:hidden feedback-card-shadow p-5 md:mb-5 md:w-1/2 mt-5 md:mt-0 relative md:p-10 bg-white rounded">
              <QuoteIcon />
              <div dangerouslySetInnerHTML={{__html: t("testimonials-4")}}></div>
            </div>
          </div>
          <div className="md:flex py-5">
            <div className="md:mb-5 md:w-1/2">
              <img
                className="object-cover w-full h-full rounded relative md:left-5 md:bottom-5 -z-1"
                src={"/img/testimonials5.png"}
                alt="note"
              />
            </div>
            <div className="feedback-card-shadow p-5 md:mb-5 md:w-1/2 mt-5 md:mt-0 relative md:p-10 bg-white rounded">
              <QuoteIcon rightside />
              <div dangerouslySetInnerHTML={{__html: t("testimonials-5")}}></div>
            </div>
          </div>
          <div className="md:flex py-5">
            <div className="hidden md:block feedback-card-shadow p-5 md:mb-5 md:w-1/2 mt-5 md:mt-0 relative md:p-10 bg-white rounded">
              <QuoteIcon />
              <div dangerouslySetInnerHTML={{__html: t("testimonials-6")}}></div>
            </div>
            <div className="md:mb-5 md:w-1/2">
              <img
                className="object-cover w-full h-full rounded relative md:right-5 md:bottom-5 -z-1"
                src={"/img/testimonials6.png"}
                alt="note"
              />
            </div>
            <div className="block md:hidden feedback-card-shadow p-5 md:mb-5 md:w-1/2 mt-5 md:mt-0 relative md:p-10 bg-white rounded">
              <QuoteIcon />
              <div dangerouslySetInnerHTML={{__html: t("testimonials-6")}}></div>
            </div>
          </div>
        </Container>
      </>
      <Footer />
    </>
  );
};

export default Testimonials;
