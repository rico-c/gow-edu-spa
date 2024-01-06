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

        <HeadingBlock smallIcon bg="/img/Course advice_shutterstock_2033930096.png" img={'/img/icon_Live Masterclass.png'} header={t('course-advise')} desc={t('courseadvice-desc2')} />
        <div className="flex justify-center pb-10">
          <div className="block w-full md:flex md:max-w-screen-xl md:pl-10">
            <div className="flex-1">
              <div className="pl-10 md:pl-10 pr-10" >
                <div className="font-bold main-color my-5">The Process</div>
                A Gow Education consultant will help you choose the most appropriate course matched to your experience and needs. We will submit the applications to the University on your behalf, including your previous course results, English language test results and other supporting documents. If you are offered a place, the University will send you a Letter of Offer which may be conditional or unconditional. If there are no conditions, you can accept your offer immediately and pay the requested fees. Examples of conditions that might be possibly imposed include the requirement to enrol in an English language school prior to starting your University course or forwarding other supporting evidence such as certified documents.
                <div className="font-bold main-color my-5">Our Approach</div>
                Our Student Placement services are free, and given our wide knowledge of the education market, your Gow Education Consultant will:
                <ul className="list-disc pl-5 my-5">
                  <li>Identify your goals, timeline, budget and your educational experience</li>
                  <li>Help you select a range of courses that will suit your needs in your chosen country</li>
                  <li>Assist in the preparation of your application</li>
                  <li>Submit your application to the Universities</li>
                  <li>Maintain contact with you and communicate University offers to you, guiding you all the way through the process.</li>
                  <li>If required by the University, assist you to meet any conditions set by the University.</li>
                </ul>
                The good news? Gow Education consultants do not charge to assist you and submit your application to a University You may however in some instances be required to pay the University application fee by providing your credit card details.

                <div className="font-bold main-color my-5">Are You Ready to Start?</div>
                For a free consultation to get started, contact us now by completing the online form.
              </div>
            </div>
            <div className="px-10 md:px-0 md:w-1/4 rounded-lg overflow-hidden" style={{minWidth: '320px'}}>
              <StudyForm shadow />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advise;
