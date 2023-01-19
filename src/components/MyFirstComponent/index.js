import React from 'react';
import PropTypes from 'prop-types';

import styles from './my-first-component.module.scss';

const MyFirstComponent = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

MyFirstComponent.propTypes = {
  text: PropTypes.element,
};

export default MyFirstComponent;
