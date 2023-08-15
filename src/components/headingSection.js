import {useTranslation} from "react-i18next";

export const HeadingSection = ({
  img,
  header,
  desc
}) => {
  const {t} = useTranslation("common");

  return (
    <div className="md:flex w-5/6 md:w-1/2 p-10 m-10 gap-10">
      <div className="flex justify-center">
        <img src={img} width="130" />
      </div>
      <div className="pt-5">
        <div className="text-3xl font-bold">{header}</div>
        <div className="pt-2">{desc}</div>
      </div>
    </div>
  );
};

