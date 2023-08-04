import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useTranslation } from 'react-i18next';
import { Form, Input, Button, Checkbox, message } from "antd";
import { fetchNewLetter } from "../api/new-letter";
import { useState } from "react";
import {checkEmailFormat} from "../utils/checkFormat";
import { Link } from "react-router-dom";

export const Subscribe = () => {
  const { t } = useTranslation("common");

  const [messageApi, contextHolder] = message.useMessage();

  const [isAgree, setAgree] = useState(true);

  const onChange = (e) => {
    setAgree(e.target.checked);
  };

  const handleNewLetter = async (data) => {
    if (!isAgree) {
      messageApi.open({
        type: "error",
        content: t("subscribe-error"),
      });

      return;
    }
    const { name, email } = data;
    if (!name || !email) {
      messageApi.open({
        type: "error",
        content: t("subscribe-param"),
      });

      return;
    }
    if(!checkEmailFormat(email)) {
      messageApi.open({
        type: "error",
        content: t("subscribe-format"),
      });

      return;
    }
    const res = await fetchNewLetter({
      first_name: name,
      email_address: email,
    });
    if (res.data === "success") {
      messageApi.open({
        type: "success",
        content: t("subscribe-callback"),
      });
    }
  };

  return (
    <>
      <Navbar />
      {contextHolder}
      <div className="flex justify-center py-5 lg:py-20">
        <div className="w-5/6 lg:w-1/2 lg:flex">
          <div className="w-full lg:w-1/2">
            <div
              className="font-bold text-center lg:text-left"
              dangerouslySetInnerHTML={{ __html: t("subscribe-slogan") }}
            ></div>
            <Form
              className="text-center lg:text-left"
              onFinish={handleNewLetter}
            >
              <div className="py-7 gap-6">
                <div>
                  <div>{t("name")}</div>
                  <Form.Item name="name">
                    <Input />
                  </Form.Item>
                </div>
                <div>
                  <div>{t("email")}</div>
                  <Form.Item name="email">
                    <Input />
                  </Form.Item>
                </div>
                <div className="pb-5">
                  <Checkbox
                    checked={isAgree}
                    onChange={onChange}
                    className="pr-2"
                  />
                  I agree to the{" "}
                  <Link to="/terms" className="underline">
                    terms and conditions.
                  </Link>
                </div>
                <Button
                  className="bg-white w-full lg:w-auto"
                  htmlType="submit"
                  style={{ background: "#f05622", color: "#fff" }}
                >
                  {t("subscribe")}
                </Button>
              </div>
            </Form>
          </div>
          <div className="lg:border-l lg:ml-5 lg:pl-5">
            <div className="flex gap-5 justify-center items-center mb-10">
              <div className="cursor-pointer">
                <img src="/logo/fb.png" width="50" />
              </div>
              <div className="cursor-pointer">
                <img src="/logo/ins.png" width="50" />
              </div>
              <div className="cursor-pointer">
                <img src="/logo/twitter.png" width="50" />
              </div>
              <div className="cursor-pointer">
                <img src="/logo/tt.png" width="50" />
              </div>
            </div>
            <div className="py-5">
              <div className="text-xl font-bold text-center">{t("subscribe-wechat")}</div>
              <div className="flex justify-center">
                <img className="w-48" src={"/qr/wechat.jpeg"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
