import React from 'react';
import Map from '@components/Map';

import styles from './styles.styl';

const IndexPage = () => (
  <div className={styles.root}>
    <h1 className={styles.title}>Мои любимые места в Твери</h1>
    <div className={styles.center}>
      <div className={styles.wrapper}>
        <Map />
      </div>
    </div>
  </div>
);

export default IndexPage;
