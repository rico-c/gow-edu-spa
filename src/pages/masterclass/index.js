import Footer from "../../components/footer";
import {useEffect, useState, useMemo} from 'react'
import Navbar from "../../components/navbar";
import {CourseCard} from "../../components/courseCard";
import {useTranslation} from "react-i18next";
import {HeadingSection} from "../../components/headingSection";
import {Detail} from "./detail";
import {Enroll} from "./enrol";
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
        label: 'All programs'
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

  console.log('currentList', currentList);

  return (
    <>
      <Navbar />
      <div>
        <div>
          <img src="/img/Masterclasses.jpg" alt="university" className="w-full" />
        </div>
        <div className="flex justify-center">
          <HeadingSection step={1} img={'/img/Icon-Performance Coaching@2x.png'} header={t('master')} desc={t('oversea-desc')} />
        </div>
        <div className="flex justify-center md:p-10 mb-5">
          <div className="w-5/6 md:w-2/3">
            <div className="md:flex justify-center mb-10 items-center">
              <div>Select Program: &nbsp;&nbsp;</div>
              <Select
                defaultValue={null}
                onChange={handleChange}
                options={programs}
                className="w-full md:w-1/3"
                placeholder="select program"
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
            <div className="flex flex-col md:flex-row md:justify-center gap-5 w-full">
              {
                currentList.map(courseInfo => <CourseCard courseInfo={courseInfo} />)
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const MasterClassRouter = () => <Switch>
  <Route path={`/masterclass/detail/:id`}>
    <Detail />
  </Route>
  <Route path={`/masterclass/enroll/:id`}>
    <Enroll />
  </Route>
  <Route>
    <MasterClass />
  </Route>
</Switch>;;

export default MasterClassRouter;