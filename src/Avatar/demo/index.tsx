import React, { memo } from 'react';
// @ts-ignore
import { Avatar } from '@sh/test';
import { Space } from 'antd-mobile';

const data = ['https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF'];
export default memo(() => {
  return (
    <Space block wrap>
      {data.map((url, index) => (
        <Avatar key={index} url={url} />
      ))}
    </Space>
  );
});
