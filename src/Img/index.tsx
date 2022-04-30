import React, { memo, useState } from 'react';
import { Modal } from 'antd';
import styles from './index.less';

interface ImgProps {
  imgUrl: string;
  className?: string;
  style?: React.CSSProperties;
}

export default memo((props: ImgProps) => {
  const { imgUrl, style, className } = props;
  const [showImg, setShowImg] = useState(false);
  return (
    <div style={style} className={className}>
      <img
        className={styles.smallImg}
        src={imgUrl}
        onClick={() => setShowImg(true)}
      />

      <Modal
        title="图片预览"
        visible={showImg}
        onCancel={() => setShowImg(false)}
        footer={null}
      >
        <img className={styles.previewImg} src={imgUrl} alt="预览图片" />
      </Modal>
    </div>
  );
});
