import React, { memo } from 'react';
// @ts-ignore
import { Img } from '@sh/test';
import './index.less';

const data = ['https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF'];
export default memo(() => {
  return (
    <div>
      {data.map((url, idx) => (
        <Img key={idx} className="imgItem" imgUrl={url} />
      ))}
    </div>
  );
});
