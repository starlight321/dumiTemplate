import React, { memo } from 'react';
import { Avatar } from 'antd-mobile';

export default memo<{ url: string }>(({ url }) => {
  return <Avatar src={url} />;
});
