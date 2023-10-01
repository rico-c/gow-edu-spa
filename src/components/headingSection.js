import {useTranslation} from "react-i18next";

export const HeadingSection = ({
  img,
  header,
  desc,
  step
}) => {
  const {t} = useTranslation("common");

  return (
    <div className={`md:flex w-5/6 md:w-1/3 py-0 m-5 gap-10 ${step === 2 ? 'justify-center' : ''}`}>
      <div className="flex justify-center">
        <img src={img} width="130" />
      </div>
      {step === 1 && <div className="pt-5">
        <div className="text-3xl font-bold">{header}</div>
        <div className="pt-2">{desc}</div>
      </div>}
    </div>
  );
};

