import React from 'react';

import PostList from '../../components/posts/PostList';
import Navbar from '../../components/shared/Navbar';

const Home = () => {
  return (
    <main>
      <Navbar />
      <PostList />
    </main>
  );
};

export default Home;
