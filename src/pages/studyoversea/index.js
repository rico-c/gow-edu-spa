import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import {LessonItem} from "../../components/lesson";
import {useTranslation} from "react-i18next";
import {HeadingBlock} from "../../components/headingBlock";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import PhdPre from "./phdpre";
import Advise from "./advise";
import University from "./university";
import Detail from "./detail";
import {StudyForm} from "../../components/studyform";

const StudyOversea = () => {
  const {t} = useTranslation("common");
  return (
    <>
      <Navbar />
      <div className="" >
        <HeadingBlock bg="/img/Study_overseas.jpg" img={'/img/Icon--Leader Prep.png'} header={t('oversea')} desc={t('oversea-desc')} />

        <div className="flex justify-center pb-10" style={{backgroundColor: 'rgb(246, 246, 246)'}}>
          <div className="block md:flex md:max-w-screen-xl md:pl-10">
            <div className="">
              <div className="pl-10 md:pl-0 pr-10" >
                <LessonItem
                  smallIcon
                  icon={"/icon/icon_Live Masterclass.png"}
                  title={t("course-advise")}
                  desc={t("lesson-desc1")}
                  link="/studyoversea/advise"
                />
                <LessonItem
                  icon={"/icon/Icon-Uni Prep@2x.png"}
                  title={t("find-my-university")}
                  desc={t("lesson-desc1")}
                  link="/studyoversea/university"
                />
                <LessonItem
                  smallIcon
                  icon={"/icon/icon_phD preparation@3x.png"}
                  title={t("phd-pre")}
                  desc={t("lesson-desc1")}
                  link="/phdready"
                />
              </div>
              <div className="pl-10 md:pl-0 pr-10 md:pr-0 md:flex gap-5 justify-center" style={{backgroundColor: 'rgb(246, 246, 246)'}}>
                <LessonItem
                  isCol
                  roundIcon
                  icon={"/img/heading-master.jpg"}
                  title={'Masterclasses'}
                  desc={t("lesson-desc1")}
                  link="/studyoversea/phdpre"
                />
                <LessonItem
                  isCol
                  roundIcon
                  icon={"/img/heading-partner.jpg"}
                  title={'Become a Partner'}
                  desc={t("lesson-desc1")}
                  link="/studyoversea/phdpre"
                />
              </div>
            </div>
            <div className="px-10 md:px-0 md:w-1/4 mt-5" style={{minWidth: '320px'}}>
              <StudyForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const StudyOverseaRouter = () => <div className="flex flex-col min-h-screen">
  <div className="flex-1">
    <Switch>
      <Route path={`/studyoversea/phdpre`}>
        <PhdPre />
      </Route>
      <Route path={`/studyoversea/advise`}>
        <Advise />
      </Route>
      <Route path={`/studyoversea/university`}>
        <University />
      </Route>
      <Route path={`/studyoversea/detail/:name/:year`}>
        <Detail />
      </Route>
      <Route>
        <StudyOversea />
      </Route>
    </Switch>
  </div>
  <Footer />
</div>

export default StudyOverseaRouter;
