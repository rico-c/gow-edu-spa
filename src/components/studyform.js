import {PlusOutlined} from '@ant-design/icons';
import React, {useEffect, useState} from 'react';
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  message,
  Upload,
} from 'antd';
import {useTranslation} from "react-i18next";
import {subjects} from "../constants/subjects";
import {countryEn, countryZh} from '../constants/country'
import {mobileCode} from '../constants/code'
import {fetchSelectList} from "../api/rank";
import {uniq} from 'lodash'

const {TextArea} = Input;

const currentYear = new Date().getFullYear();

const codes = uniq(Object.values(mobileCode).sort((a,b) => a - b))

const yearList = [currentYear + 5, currentYear + 4, currentYear + 3, currentYear + 2, currentYear + 1, currentYear]

export const StudyForm = ({shadow}) => {
  const {t, i18n} = useTranslation("studyform");

  const [rankdata, setRankdata] = useState([]);

  const [messageApi, contextHolder] = message.useMessage();
  const lang = i18n.language;

  const coutryList = lang === 'zh' ? countryZh : countryEn;

  const selectBefore = (
    <Select defaultValue="http://">
      <Select.Option value="http://">http://</Select.Option>
      <Select.Option value="https://">https://</Select.Option>
    </Select>
  );

  const handleFinish = (data) => {
    if(!data.agree) {
      messageApi.open({
        type: "error",
        content: 'please agree our policy',
      });
    }
    if(data.email !== data['email-repeat']) {
      messageApi.open({
        type: "error",
        content: 'email not match',
      });
    }
  }

  const handleFailed = (data) => {
    console.log(222, data)
  }

  useEffect(() => {
    const fetch = async () => {
      const res = await fetchSelectList()
      setRankdata(res.country_list)
    }

    fetch();
  }, [])

  return <div className="w-full p-5 bg-white">
    <div className='text-xl font-bold'>
      {t('title')}
    </div>
    <div className='py-5'>
      {t('sub-title')}
    </div>
    <Form
      labelCol={{span: 24}}
      wrapperCol={{span: 24}}
      layout="vertical"
      shadow={shadow}
      onFinish={handleFinish}
      onFinishFailed={handleFailed}
    >
      <Form.Item label={t('first-name')} name="firstname" required rules={[{required: true, message: 'Please input your first name'}]}>
        <Input />
      </Form.Item>
      <Form.Item label={t('last-name')} name="lastname" required rules={[{required: true, message: 'Please input your last name'}]}>
        <Input />
      </Form.Item>
      <Form.Item label={t('email-address')} name="email" required rules={[{ type: 'email' }, {required: true, message: 'Please input your email'}]}>
        <Input />
      </Form.Item>
      <Form.Item label={t('email-confirm')} name="email-repeat" required rules={[{ type: 'email' }, {required: true, message: 'Please input your email'}]}>
        <Input />
      </Form.Item>
      <Form.Item label={t('current-country')} name="current-country">
        <Select showSearch filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        } options={coutryList}>
        </Select>
      </Form.Item>
      <div className='flex gap-1'>
        <Form.Item className='w-20' label="mobile" required rules={[{required: true, message: 'Please input your mobile'}]}>
          <Select showSearch filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }>
            {codes.map(code => <Select.Option value={code}>+{code}</Select.Option>)}
          </Select>
        </Form.Item>
        <Form.Item label=" " rules={[{type: 'number'}, {required: true, message: 'Please input your mobile'}]}>
          <Input />
        </Form.Item>
      </div>

      <Form.Item label={t('destination')} name="destination" required rules={[{required: true, message: 'Please select your destination'}]}>
        <Select>
          {rankdata.map(item => <Select.Option key={item.country_code} value={item.country_code}>{item.country_name}</Select.Option>)}

        </Select>
      </Form.Item>
      <Form.Item label={t('year')} name="year" required rules={[{required: true, message: 'Please select year'}]}>
        <Select>
          {
            yearList.map((year) => <Select.Option key={year} value={year}>{year}</Select.Option>)
          }
        </Select>
      </Form.Item>
      <Form.Item label={t('area')} name="area" required rules={[{required: true, message: 'Please select your area'}]}>
        <Select>
          {subjects.map((subject) => <Select.Option key={subject} value={subject}>{subject}</Select.Option>)}
        </Select>
      </Form.Item>
      <Form.Item name="contact-me" valuePropName="checked">
        <Checkbox>{t('contact-me')}</Checkbox>
      </Form.Item>
      <Form.Item name="receive-updates" valuePropName="checked">
        <Checkbox>{t('receive-updates')}</Checkbox>
      </Form.Item>
      <Form.Item name="agree" valuePropName="checked">
        <Checkbox>{t('agree')} <a className='underline' href="/terms">Terms</a> , <a className='underline' href="/privacy">Privacy Policy</a>  </Checkbox>
      </Form.Item>
      <Form.Item >
        <Button className='w-full' htmlType="submit" type="primary" style={{backgroundColor: '#f05622'}}>{t('submit')}</Button>
      </Form.Item>
    </Form>
  </div>
}