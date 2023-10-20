import Footer from "../../components/footer";

import Navbar from "../../components/navbar";
import {useTranslation} from "react-i18next";
// import {useSearchParams} from "next/navigation";
import {fetchSchool} from "../../api/rank";
import {useEffect, useState} from "react";
import {
  useParams
} from "react-router-dom";

const Detail = () => {
  // const searchParams = useSearchParams();
  let {name, year} = useParams();

  const [data, setData] = useState(null);
  const {t} = useTranslation("university");

  useEffect(() => {
    const getInfo = async () => {
      const res = await fetchSchool({
        id: name,
        year,
      });
      console.log(res);
      setData(res);
    };
    if (year && name) {
      getInfo();
    }
  }, [year, name]);

  return (
    <>

      <Navbar />
      {data && (
        <div>
          {/* <div>
            <img src="/img/b3.png" />
          </div> */}
          <div className="flex justify-center pt-10">
            <div className="w-full md:w-1/2 px-4">
              <div className="text-2xl font-bold main-color">
                {data.school_name}
              </div>
              <div className="border-t pb-5"></div>
              <div className="flex gap-5">
                <div className="flex-1">
                  <div className="p-5">
                    <div>
                      <img src={data.logo_url} width="220" />
                    </div>
                    <div className="flex items-center gap-5 pb-5 border-b">
                      <img src={data.flag_url} width="50" height="20" />
                      <span className="text-lg font-bold">
                        {data.country_name}
                      </span>
                    </div>
                    <div className="flex pt-5">
                      <div className="w-40">
                        {t("world-rank")}&nbsp;{year}
                      </div>
                      <div className="font-bold">{data.rank}</div>
                    </div>
                    <div className="flex pt-5">
                      <div className="w-40">{t("city")}</div>
                      <div className="font-bold">{data.city}</div>
                    </div>
                    <div className="flex pt-5">
                      <div className="w-40">{t("state")}</div>
                      <div className="font-bold">{data.state}</div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <img src={data.school_image_url} />
                </div>
              </div>
              <div className="border-b pt-5"></div>
              <div className="text-3xl fotn-bold pt-5 main-color">{t('overview')}: {data.school_name}</div>
              <div className="info-graph pt-5 leading-7" dangerouslySetInnerHTML={{__html: data.school_info}}></div>
              <div className="flex gap-5 mb-10">
                <div className="w-1/2"><img width="w-full" src={data.city_image_url} /></div>
                <div className="w-1/2"><div className="text-3xl fotn-bold main-color">{t('location')}: {data.city}</div>
                  <div className="info-graph pt-5 leading-7" dangerouslySetInnerHTML={{__html: data.city_info}}></div></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
