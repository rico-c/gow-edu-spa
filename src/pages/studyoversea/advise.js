import Footer from "../../components/footer";
 
import Navbar from "../../components/navbar";
import {useTranslation} from "react-i18next";
import {HeadingSection } from '../../components/headingSection'

const Advise = () => {
  const {t} = useTranslation("university");


  return (
    <>
       
      <Navbar />
      <div>
        <div>
          <img src="/img/course_advice.jpg" alt="university" className="w-full"/>
        </div>
        <div className="flex justify-center">
          <HeadingSection img={'/img/Icon-Turnitin Feedback.png'} header={t('course-advise')} desc={t('course-advise-desc')} />
        </div>
        <div className="flex justify-center py-10">
          wip
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Advise;
