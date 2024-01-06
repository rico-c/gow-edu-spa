import Footer from "../../components/footer";
import {useEffect, useState, useMemo} from 'react'
import Navbar from "../../components/navbar";
import {CourseCard} from "../../components/courseCard";
import {useTranslation} from "react-i18next";
import {HeadingBlock} from "../../components/headingBlock";
import {Detail} from "./detail";
import {Enrol} from "./enrol";
import {Confirm} from "./confirm";
import {Select} from 'antd';
import {
  LoadingOutlined,
} from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {fetchCourses} from '../../api/masterclass'

const MasterClass = () => {
  const {t} = useTranslation("common");

  const [programList, setProgramList] = useState([])
  const [initprogramList, setInitProgramList] = useState([])

  const programs = useMemo(() => {
    const items = initprogramList.map(i => ({
      value: i.link_code,
      label: i.program_name
    }));
    return [
      {
        value: null,
        label: t('all-programs')
      },
      ...items
    ]
  }, [programList])

  useEffect(() => {
    const fetch = async () => {
      const res = await fetchCourses();
      setProgramList(res.program_list)
      setInitProgramList(res.program_list)
    }
    fetch();
  }, [])

  const currentList = useMemo(() => {
    let res = [];
    programList.forEach(i => {
      res = res.concat(i.courses)
    })
    return res;
  }, [programList])


  const handleChange = async (v) => {
    const res = await fetchCourses(v);
    setProgramList(res.program_list)
  }

  return (
    <>
      <Navbar />
      <div>
        <HeadingBlock bg="/img/Masterclasses.jpg" img={'/img/Icon-Turnitin Feedback.png'} header={t('master')} desc={t('master-desc')} />
        <div className="flex justify-center md:p-10 mb-5">
          <div className="w-5/6 md:max-w-screen-xl">
            <div className="md:flex justify-center mb-10 items-center">
              <div>{t('select-program')}: &nbsp;&nbsp;</div>
              <Select
                defaultValue={null}
                onChange={handleChange}
                options={programs}
                className="w-full md:w-1/3"
                placeholder={t('select-program')}
              />
            </div>

            {
              currentList.length === 0 ? <div className="flex justify-center">
                <span className="justify-center items-center">
                  <LoadingOutlined style={{fontSize: '30px'}} />
                  <span className="text-xl">  &nbsp;&nbsp;&nbsp; Loading Data</span>
                </span>
              </div> : null
            }
            <div className="flex flex-col md:flex-row w-full flex-wrap gap-5">
              {
                currentList.map(courseInfo => <CourseCard courseInfo={courseInfo} />)
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MasterClassRouter = () => <div className="flex flex-col min-h-screen">
  <div className="flex-1">
    <Switch >
      <Route path={`/masterclass/detail/:id`}>
        <Detail />
      </Route>
      <Route path={`/masterclass/enrol/:id`}>
        <Enrol />
      </Route>
      <Route path={`/masterclass/confirm/:id`}>
        <Confirm />
      </Route>
      <Route>
        <MasterClass />
      </Route>
    </Switch>
  </div>
  <Footer />
</div>

export default MasterClassRouter;