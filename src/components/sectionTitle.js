import React from "react";
import Container from "./container";

const SectionTitle = (props) => {
  return (
    <Container
      className={`flex md:max-w-screen-md flex-col mt-4 ${
        props.align === "left" ? "" : "items-center"
      }`}>
      {props.pretitle && (
        <div className="text-sm font-bold tracking-wider text-blue-600 uppercase">
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 style={{color: '#f05622'}} className="md:max-w-screen-md mt-3 text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-3xl dark:text-white">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="text-left md:max-w-screen-md py-4  text-gray-900  " dangerouslySetInnerHTML={{__html: props.children}}>
        </p>
      )}
    </Container>
  );
}

export default SectionTitle;