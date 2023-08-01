import {Link} from "react-router-dom";
// import {useRouter} from "next/router";

import {Disclosure} from "@headlessui/react";
import {useTranslation} from "react-i18next";
import TranslateIcon from "@mui/icons-material/Translate";
import IconButton from "@mui/material/IconButton";
import {useEffect, useState} from "react";
import {
  useLocation,
  useParams
} from "react-router-dom";

const Navbar = () => {
  const {t, i18n} = useTranslation("common");
  const [currentNav, setNav] = useState("/")

  let location = useLocation();
  let params = useParams();
  console.log(location,params, i18n)
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
      label: "partner",
      route: "/partner",
    },
    {
      label: "feedback",
      route: "/feedback",
    },
    {
      label: "about",
      route: "/about",
    },
    {
      label: "contact",
      route: "/contact",
    },
  ];

  const locale = i18n.language;

  useEffect(() => {
    const r = location.pathname.split('/')[1];
    setNav(`/${r}`)
  }, [location.pathname])

  const changeLang = () => {
    const changeTo = i18n.language === "en" ? "zh" : "en";
    i18n.changeLanguage(changeTo);
  }

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-3 mx-auto xl:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({open}) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full xl:w-auto">
                <Link to="/">
                  <span
                    style={{height: "70px"}}
                    className="flex items-center space-x-2 text-2xl font-medium text-cyan-700"
                  >
                    <img
                      src={
                        locale === "en"
                          ? "/logo/logo-eng.png"
                          : "/logo/logo-zh.png"
                      }
                      alt="N"
                      width="220"
                      height="70"
                    />
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md xl:hidden hover:text-cyan-700 focus:text-cyan-700 focus:bg-indigo-100 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 xl:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        to={item.route}
                        className={`${item.route === currentNav ? 'text-cyan-700' : 'text-gray-500'} text-center w-full px-4 py-2 -ml- rounded-md  hover:text-cyan-700 focus:text-cyan-700  focus:outline-none`}
                      >
                        {t(item.label)}
                      </Link>
                    ))}
                    <div className="text-center w-full px-4 py-2 text-gray-500 rounded-md  hover:text-cyan-700 focus:text-cyan-700  focus:outline-none">
                      <IconButton onClick={changeLang} className="text-gray-500  ">
                        <TranslateIcon />
                      </IconButton>
                    </div>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center xl:flex xl:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none xl:pt-0 xl:flex">
            {navigation.map((menu, index) => (
              <li className="nav__item" key={index}>
                <Link
                  to={menu.route}
                  className={`${menu.route === currentNav ? 'text-cyan-700' : 'text-gray-800'} font-bold inline-block px-4 py-2 text-lg font-normal  no-underline rounded-md   hover:text-cyan-700 focus:text-cyan-700 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800}`}
                >
                  {t(menu.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 xl:flex nav__item">
          <div>
            <IconButton onClick={changeLang} className="text-gray-500  ">
              <TranslateIcon />
            </IconButton>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
