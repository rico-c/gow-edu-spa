import Footer from "../../components/footer";

import Navbar from "../../components/navbar";
import {useTranslation} from "react-i18next";
import {List, Select, Table} from "antd";
import {Link} from "react-router-dom";
import {fetchSelectList, fetchRankingList} from "../../api/rank";
import {useEffect, useState} from "react";
import isMobile from 'ismobilejs';

const University = () => {
  const {t} = useTranslation("university");

  const [countries, setCountries] = useState([]);
  const [years, setYears] = useState([]);

  const [currentCountry, setCurrentCountry] = useState();
  const [currentYear, setCurrentYear] = useState();

  const [data, setData] = useState([]);
  const [info, setInfo] = useState({});

  const mobile = isMobile()

  const columns = mobile.any ? [
    {
      title: t('times-rank'),
      dataIndex: "rank",
      key: "rank",
      width: 60
    },
    {
      title: t('country-rank'),
      dataIndex: "c_rank",
      key: "c_rank",
      width: 75
    },
    {
      title: t('institution'),
      dataIndex: "school_name",
      key: "school_name",
      render: (text, record, index) => {
        return <div className="flex items-center gap-10"><span className="font-bold">{text}</span></div>
      }
    },
    {
      title: t('city'),
      dataIndex: "city_name",
      key: "city_name",
    },
  ] : [
    {
      title: t('times-rank'),
      dataIndex: "rank",
      key: "rank",
      width: 140
    },
    {
      title: t('country-rank'),
      dataIndex: "c_rank",
      key: "c_rank",
      width: 150
    },
    {
      title: t('institution'),
      dataIndex: "school_name",
      key: "school_name",
      render: (text, record, index) => {
        return <div className="flex items-center gap-10"><span className="font-bold">{text}</span></div>
      }
    },
    {
      title: t('state'),
      dataIndex: "state_name",
      key: "state_name",
    },
    {
      title: t('city'),
      dataIndex: "city_name",
      key: "city_name",
    },
  ];

  useEffect(() => {
    const getSelectList = async () => {
      const res = await fetchSelectList();
      console.log(res);
      setCountries(res.country_list);
      setCurrentCountry(res.country_list[0].country_code);
      setYears(res.year_list);
      setCurrentYear(res.year_list[0]);
    };
    getSelectList();
  }, []);

  useEffect(() => {
    const getList = async () => {
      const res = await fetchRankingList({
        country: currentCountry,
        year: currentYear,
      });
      console.log(">>>res", res);
      setData(res.rank_list);
      setInfo(res);
    };
    if (currentCountry && currentYear) {
      getList();
    }
  }, [currentCountry, currentYear]);

  return (
    <>

      <Navbar />
      <div>
        <div>
          <img src="/img/Find_my_university.jpg" alt="university" className="w-full" />
        </div>
        <div className="flex justify-center py-10">
          <div className="px-5 md:px-0 w-full md:w-3/5 ">
            <div className="main-color text-3xl font-bold pb-5">
              {t("title")}
            </div>
            <div className="flex items-center gap-5 pb-5 text-lg">
              <img className="hidden md:block" src="/img/icon_icon_Get connected.png" width="130px" />
              {t("desc")}
            </div>
            <div className="flex justify-center pb-5">
              <img src="/img/theWord.png" width="250px" />
            </div>
            <div className="text-xl font-bold">{t("sub-title")}</div>
            <div className="text-lg pb-5">{t("sub-title-1")}</div>
            <div className="max-w-md">
              <List bordered>
                <List.Item style={{backgroundColor: "#f5f5f5"}}>
                  {t("areas-1")}
                </List.Item>
                <List.Item>{t("areas-2")}</List.Item>
                <List.Item style={{backgroundColor: "#f5f5f5"}}>
                  {t("areas-3")}
                </List.Item>
                <List.Item>{t("areas-4")}</List.Item>
                <List.Item style={{backgroundColor: "#f5f5f5"}}>
                  {t("areas-5")}
                </List.Item>
              </List>
            </div>
            <div className="text-xl font-bold py-5">{t("destination")}</div>
            <div className="flex gap-5">
              <Select
                size="large"
                value={currentCountry}
                style={{width: 240}}
                onChange={(v) => setCurrentCountry(v)}
                options={countries.map((i) => ({
                  value: i.country_code,
                  label: i.country_name,
                }))}
              />
              <Select
                size="large"
                value={currentYear}
                style={{width: 240}}
                onChange={(v) => setCurrentYear(v)}
                options={years.map((i) => ({value: i, label: i}))}
              />
            </div>
            <div>
              <img className="pt-5 w-full" src={info.country_image_url} alt="university" />
            </div>
            <div className="text-xl font-bold py-5">
              {t("partner")} - <span className="main-color">{info.country_name}</span>
            </div>
            <div>
              <Table tableLayout={mobile.any ? "fixed" : "auto"} size={mobile.any ? 'small' : 'large'} className="w-full" dataSource={data} columns={columns} rowClassName={(record, index) => {
                let className = 'light-row';
                if (index % 2 === 1) className = 'dark-row';
                return className;
              }} />
            </div>
            <div className="text-xl font-bold py-5">
              {t("top-university")} - {info.country_name}
            </div>
            <div className="flex flex-wrap gap-5">
              {
                data.slice(0, 8).map((i) => <div key={i.school_id} className="w-1/5 shadow flex justify-center items-center p-1 rounded">
                  <Link to={`/studyoversea/detail/${i.school_id}/${currentYear}`}>
                    <img src={i.logo_url} />
                  </Link>
                </div>)
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default University;
