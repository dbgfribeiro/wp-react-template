import React, { useState, useEffect } from 'react';
import Post from '../Post';

import styles from './post-list.module.scss';

const PostList = () => {
  const [availablePosts, setAvailablePosts] = useState([]);

  // Posts fetching
  useEffect(() => {
    async function loadPosts() {
      const responsePosts = await fetch('/wp-json/wp/v2/posts');
      const posts = await responsePosts.json();
      setAvailablePosts(posts);
    }
    loadPosts();
  }, []);

  return (
    <div className={styles.postList}>
      {availablePosts !== [] &&
        availablePosts.map((post, index) => (
          <Post content={post} key={index} />
        ))}
    </div>
  );
};

export default PostList;
