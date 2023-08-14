import React from 'react';
import {FloatButton, Popover, QRCode} from 'antd';
import {WechatOutlined} from '@ant-design/icons';

export const WechatFloat = () => <Popover
  className="right-3 bottom-20 md:bottom-24 md:right-6"
  placement="leftBottom"
  content={<img width="200px" src="/qr/wechat.jpeg" />} trigger="click">
  <FloatButton
    onClick={() => console.log('click')}
    icon={<WechatOutlined style={{fontSize: '25px', transform: 'translateX(-3px)'}}
    />}
  />
</Popover>
