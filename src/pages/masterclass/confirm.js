import {useEffect, useState, useMemo} from 'react'
import Navbar from "../../components/navbar";
import {useTranslation} from "react-i18next";
import {HeadingBlock} from "../../components/headingBlock";
import {LessonItem} from '../../components/lesson'

export const Confirm = () => {
  const {t} = useTranslation("common");
  
  return (
    <>
      <Navbar />
      <div>
        <HeadingBlock bg="/img/Masterclasses.jpg" img={'/img/Icon-Turnitin Feedback.png'} header={'Enrolment Confirmation'} desc={`Thank you for your enrolment in {name of course}. `} />
        <div className="flex justify-center pb-10">
          <div className="block w-full md:flex md:max-w-screen-xl md:pl-10">
            <div className="flex-1">
              <div className="pl-10 md:pl-10 pr-10" >
                <div className="w-5/6 md:max-w-screen-xl">
                  Thank you for your enrolment in name of course.<br /><br />

                  An enrolment confirmation and Tax Invoice have been sent to your email address.<br /><br />

                  If this is the first Masterclass in which you have enrolled, a password has also been emailed to you. You can re-set your password at any time.<br /><br />

                  You can start your course now.<br />
                </div>
              </div>
            </div>
            <div className="hidden md:block px-10 md:px-0 md:w-1/4 rounded-lg overflow-hidden" style={{minWidth: '320px'}}>
              {/* <StudyForm shadow /> */}
              <LessonItem
                isCol
                roundIcon
                icon={"/img/heading-master.jpg"}
                title={'Masterclasses'}
                desc={t("lesson-desc1")}
                link="/masterclass"
              />
              {/* <LessonItem
                isCol
                roundIcon
                icon={"/img/heading-partner.jpg"}
                title={'Become a Partner'}
                desc={t("lesson-desc1")}
                link="/partner"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

