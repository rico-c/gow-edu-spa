import React from 'react';
import {FloatButton, Popover, QRCode} from 'antd';
import {WechatOutlined} from '@ant-design/icons';

export const WechatFloat = () => <Popover placement="leftBottom" content={<img width="200px" src="/qr/wechat.jpeg" />} trigger="click"><FloatButton onClick={() => console.log('click')} icon={<WechatOutlined style={{fontSize: '25px', transform: 'translateX(-3px)'}} />} /></Popover>
