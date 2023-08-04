import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import commonEn from './locales/en/common.json';
import studyformEn from './locales/en/studyform.json';
import universityEn from './locales/en/university.json';
import commonZh from './locales/zh/common.json';
import studyformZh from './locales/zh/studyform.json';
import universityZh from './locales/zh/university.json';

const resources = {
  en: {
    common: commonEn,
    studyform: studyformEn,
    university: universityEn
  },
  zh: {
    common: commonZh,
    studyform: studyformZh,
    university: universityZh
  }
};

console.log(resources)

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;