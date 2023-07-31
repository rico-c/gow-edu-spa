import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";

const navigation = [
  {
    label: "home",
    route: "/",
  },
  {
    label: "oversea",
    route: "/studyoversea",
  },
  {
    label: "master",
    route: "/masterclass",
  },
  {
    label: "phd",
    route: "/phdready",
  },
  {
    label: "about",
    route: "/about",
  },
  {
    label: "partner",
    route: "/partner",
  },
  {
    label: "contact",
    route: "/contact",
  },
];

export default function Footer() {
  const {t} = useTranslation("common");
  return (
    <div
      className="relative"
      style={{backgroundColor: "#383838", color: "#8e8e8e"}}
    >
      <div className="md:flex items-center justify-center gap-20 py-10">
        <div className="flex justify-center">
          <Link
            to="/"
            className="flex items-center space-x-2 text-2xl font-medium"
          >
            <img src="/logo/View-logo.png" alt="N" width="100" height="100" />
          </Link>
        </div>
        <div className="">
          {navigation.map((item, index) => (
            <Link
              key={index}
              to={item.route}
              className="text-center w-full md:px-4 py-1 md:py-2 md:-ml-4 rounded-md block md:inline"
            >
              {t(item.label)}
            </Link>
          ))}
        </div>
      </div>

      <div className="py-5 text-sm md:flex justify-center border-t">
        <div className="flex justify-center">© {t('web-right')} </div><div className="flex justify-center"> <a className="px-2 cursor-pointer" href="/terms">{t('terms-conditions')} </a> | <a href="/privacy" className="px-2 cursor-pointer">{t('privacy-policy')}</a> | <a className="px-2 cursor-pointer">{t('contact-us')}</a></div>
      </div>
    </div>
  );
}
