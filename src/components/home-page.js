import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Lazy Page Loading with React Router and bundle-loader</h1>

      <h2>Get Started</h2>
      <ol>
        <li>Review the <Link to="/second">Second Page</Link></li>
      </ol>
    </div>
  );
};

export default HomePage;
