import {useTranslation} from "react-i18next";

export const HeadingSection = ({
  img,
  header,
  desc,
  step = 1,
  fullWidth = false
}) => {
  const {t} = useTranslation("common");

  return (
    <div className={`md:flex w-5/6 ${fullWidth ? 'w-full' : 'md:max-w-screen-xl'} py-0 my-5 gap-10 ${step === 2 ? 'justify-center' : ''}`}>
      <div className="flex justify-center flex-shrink-0 items-center">
        <img src={img} style={{width: '130px', height: '130px'}} alt="" className="flex-1"/>
      </div>
      {step === 1 && <div className="pt-2">
        <div className="text-3xl font-bold main-color">{header}</div>
        <div className="pt-2">{desc}</div>
      </div>}
    </div>
  );
};

