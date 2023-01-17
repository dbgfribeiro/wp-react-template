import React from 'react';
import PropTypes from 'prop-types';

import styles from './post.module.scss';

const Post = ({ content }) => {
  return (
    <a className={styles.postCard} href={`/${content.slug}`}>
      <h3>{content.acf.title}</h3>
    </a>
  );
};

Post.propTypes = {
  content: PropTypes.array,
};

export default Post;
