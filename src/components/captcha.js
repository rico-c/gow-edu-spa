import React, {useEffect, useState} from "react";

const Captcha = ({onVerify}) => {
  useEffect(() => {
    window.captchaCallback = (data) => {
      console.log('11callback', data);
      onVerify(data);
    }
  }, [])
  return (
    <div className="cf-turnstile" data-sitekey="0x4AAAAAAAJZrtHeemIkgEtI" data-callback="captchaCallback"></div>
  );
};

export default Captcha;
