import React from 'react';
import cx from 'classnames';

import CommonLayout from '@layouts/CommonLayout';

import styles from './index.styl';


class AppLayout extends React.Component {

  render() {
    const {
      children,
    } = this.props;

    return (
      <CommonLayout>
        <div className={styles.wrapper}>
          {children}
        </div>
      </CommonLayout>
    );
  }
}
export default AppLayout;
