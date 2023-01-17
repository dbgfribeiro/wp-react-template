import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styles from './single-post.module.scss';

const SinglePost = () => {
  const [availablePosts, setAvailablePosts] = useState([]);
  const { postSlug } = useParams();
  const [selectedPost, setSelectedPost] = useState({});

  useEffect(() => {
    async function loadPosts() {
      const responsePosts = await fetch('/wp-json/wp/v2/posts');
      const posts = await responsePosts.json();
      setAvailablePosts(posts);
    }
    loadPosts();
  }, []);

  useEffect(() => {
    setSelectedPost(availablePosts.find((post) => post.slug === postSlug));
  }, [availablePosts]);

  const postTitle = selectedPost?.acf?.title;
  const postDescription = selectedPost?.acf?.description;

  return (
    <div className={styles.postContainer}>
      <h2>{postTitle}</h2>
      <p>{postDescription}</p>
    </div>
  );
};

export default SinglePost;
