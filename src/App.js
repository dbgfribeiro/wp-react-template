import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import SinglePost from './pages/SinglePost';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/:postSlug" element={<SinglePost />} />
      </Routes>
    </Router>
  );
};
