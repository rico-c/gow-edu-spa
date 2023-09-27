import React, {useEffect, useState} from "react";

const Captcha = ({onVerify}) => {
  useEffect(() => {
    window.captchaCallback = (data) => {
      console.log('callback', data);
      onVerify();
    }
  }, [])
  return (
    <div className="cf-turnstile" data-sitekey="0x4AAAAAAAJW6qQuz74LUOcu" data-callback="captchaCallback"></div>
  );
};

export default Captcha;
