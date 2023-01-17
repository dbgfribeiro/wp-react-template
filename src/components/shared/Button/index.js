import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.module.scss';

const Button = ({ children, type, variant, handler, isFullWidth }) => {
  return (
    <button
      type={!type ? 'button' : type}
      onClick={handler}
      className={`
        ${styles.button}
        ${isFullWidth && styles.fullWidth}
        ${
          !variant
            ? styles.primary
            : variant === 'secondary'
            ? styles.secondary
            : ''
        }`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.element,
  type: PropTypes.string,
  variant: PropTypes.string,
  handler: PropTypes.func,
  isFullWidth: PropTypes.bool,
};

export default Button;
