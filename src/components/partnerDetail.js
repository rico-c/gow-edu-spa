import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {Button, Form, Input, Select, InputNumber} from "antd";
import {MainButton} from "./button";
import store from 'store';
import {mobileCode} from '../constants/code'
import {uniq} from 'lodash'
import {countryEn, countryZh} from '../constants/country'
import axios from 'axios';

// const sentWaitTime = 15 * 60 * 1000;
const sentWaitTime = 20 * 1000;

const codes = uniq(Object.values(mobileCode).sort((a, b) => a - b))

const PartnerDetail = ({onCancel}) => {
  const {t, i18n} = useTranslation("common");
  const [form] = Form.useForm();

  const [sent, setSent] = useState(store.get('sent') === '1');
  const [expire, setExpire] = useState(Number(store.get('expire')));

  const [enterEnable, setEnterEnable] = useState(false);

  const [countryInfo, setCountryInfo] = useState();

  const lang = i18n.language;
  const coutryList = lang === 'zh' ? countryZh : countryEn;

  useEffect(() => {
    const fetchCountry = async () => {
      const ipRes = await axios.get('https://api.ipify.org?format=json')
      const ip = ipRes.data.ip;
      const countryRes = await axios.get(`http://api.ipstack.com/${ip}?access_key=2de4bdfdc365f99f9e15ffb6020deb17`)
      setCountryInfo(countryRes.data)
      console.log(222, countryRes);

      form.setFieldsValue({
        residence: countryRes.data.country_code,
        // 'mobile-code': countryRes.data.country_name,
        state: countryRes.data.region_name
      })
    }
    fetchCountry();
  }, [])

  useEffect(() => {
    if (sent) {
      setTimeout(() => {
        setSent(false);
        store.set('sent', '0');
      }, expire - Date.now())
    }
  }, [])

  const handleClick = () => {
    store.set('sent', '1');
    store.set('expire', Date.now() + sentWaitTime);
    setSent(true);
    setExpire(Date.now() + sentWaitTime)

    setTimeout(() => {
      setSent(false);
      store.set('sent', '0');
    }, sentWaitTime)
  }

  const handleFormChange = (data, allData) => {
    const pass = allData.every(i => i.errors.length === 0 && i.touched);
    if (pass) {
      setEnterEnable(true)
    } else {
      setEnterEnable(false)
    }
  }

  const handleCancel = () => {
    onCancel();
  }

  return (
    <div className="flex justify-center pt-10 w-full">
      <div className="shadow w-full max-w-2xl rounded p-10 mb-10 bg-white">
        <div className="text-3xl font-bold main-color mb-5">
          {t("details")}
        </div>
        <div>
          <Form form={form} layout="vertical" onFieldsChange={handleFormChange}>
            <Form.Item
              label={t("address1")}
              name="address1"
              rules={[{required: true}]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={t("address2")}
              name="address2"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={t("state")}
              name="state"
              rules={[{required: true}]}
            >
              <Input />
            </Form.Item>
            <div className='flex gap-1'>
              <Form.Item name="mobile-code" className='w-20' label={t('mobile')} required rules={[{required: true, message: 'Please input your mobile'}]}>
                <Select
                  virtual={false}
                  filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                  } getPopupContainer={triggerNode => triggerNode.parentNode}>
                  {codes.map(code => <Select.Option value={code}>+{code}</Select.Option>)}
                </Select>
              </Form.Item>
              <Form.Item name="mobile" label=" " rules={[{type: 'number'}]}>
                <InputNumber style={{width: '200px'}} addonAfter={null} controls={false} />
              </Form.Item>
            </div>
            <Form.Item
              label={t("affiliate")}
              name="affiliate"
              rules={[{required: true}]}
            >
              <Input />
            </Form.Item>
            <Form.Item label={t('residence')} name="residence">
              <Select
                virtual={false}
                getPopupContainer={triggerNode => triggerNode.parentNode}
                options={coutryList}>
              </Select>
            </Form.Item>
            {countryInfo && countryInfo.residence === 'AUS' && <Form.Item
              label={t("abn-num")}
              name="abn"
              rules={[{required: true, message: 'Please input ABN'}]}
            >
              <div className="flex gap-5 items-baseline">
                <Input />
                <MainButton disabled={sent} onClick={handleClick}>{t('abn-validate')}</MainButton>
              </div>
            </Form.Item>}
            <div className="flex gap-5 pt-5">
              <Button
                size="large"
                className="w-1/2"
                onClick={handleCancel}
              >
                {t("cancel")}
              </Button>
              <Form.Item className="w-1/2">
                <Button
                  disabled={!enterEnable}
                  size="large"
                  style={enterEnable && {backgroundColor: "#F05523", color: "#fff"}}
                  className="w-full"
                  htmlType="submit"
                >
                  {t("submit")}
                </Button>
              </Form.Item>
            </div>

          </Form>
        </div>
      </div>
    </div >
  );
};

export default PartnerDetail;
