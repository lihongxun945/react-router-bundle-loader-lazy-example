import React from 'react';
import styles from './second.scss';

const SecondPage = () => {
  return (
    <div className={styles.page}>
      <h1>Second Page</h1>
      <p>This is second Page. Text color is red, to ensure that CSS is working.</p>
    </div>
  );
};

export default SecondPage;
