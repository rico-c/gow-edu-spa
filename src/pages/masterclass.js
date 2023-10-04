import Footer from "../components/footer";
import {useState} from 'react'
import Navbar from "../components/navbar";
import {CourseCard} from "../components/courseCard";
import {useTranslation} from "react-i18next";
import {HeadingSection} from "../components/headingSection";

import {TreeSelect} from 'antd';

const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: <b style={{color: '#08c'}}>leaf3</b>,
          },
        ],
      },
    ],
  },
];

const MasterClass = () => {
  const {t} = useTranslation("common");

  const [value, setValue] = useState();

  const onChange = (newValue) => {
    setValue(newValue);
  };

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
        <div className="flex justify-center p-10">
          <div className="w-5/6 md:w-1/3">
            <TreeSelect
              showSearch
              className="w-1/2 mb-10"
              value={value}
              dropdownStyle={{maxHeight: 400, overflow: 'auto'}}
              placeholder="Search course categories"
              allowClear
              treeDefaultExpandAll
              onChange={onChange}
              treeData={treeData}
            />
            <div className="flex justify-between gap-5">
              <CourseCard />
              <CourseCard />
              <CourseCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MasterClass;