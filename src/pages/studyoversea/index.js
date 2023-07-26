import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import {LessonItem} from "../../components/lesson";
import {useTranslation} from "react-i18next";
import {HeadingSection} from "../../components/headingSection";
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

const StudyOversea = () => {
  const {t} = useTranslation("common");
  return (
    <>
      <Navbar />
      <div className="pb-5">
        <div>
          <img src={'/img/Study_overseas.jpg'} />
        </div>
        <div className="flex justify-center">
          <HeadingSection img={'/img/Icon--Leader Prep.png'} header={t('oversea')} desc={t('oversea-desc')} />
        </div>
        <div>
          <LessonItem
            icon={"/icon/Icon-Turnitin Feedback@2x.png"}
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
            icon={"/icon/icon_phD preparation@3x.png"}
            title={t("phd-pre")}
            desc={t("lesson-desc1")}
            link="/studyoversea/phdpre"
          />
        </div>
        <div className="md:flex gap-5 justify-center">
          <LessonItem
            isCol
            icon={"/icon/icon_phD preparation@3x.png"}
            title={t("phd-pre")}
            desc={t("lesson-desc1")}
            link="/studyoversea/phdpre"
          />
          <LessonItem
            isCol
            icon={"/icon/icon_phD preparation@3x.png"}
            title={t("phd-pre")}
            desc={t("lesson-desc1")}
            link="/studyoversea/phdpre"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

const StudyOverseaRouter = () => <Switch>
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
</Switch>;

export default StudyOverseaRouter;
