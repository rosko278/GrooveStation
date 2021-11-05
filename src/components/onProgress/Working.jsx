import React from 'react';
import './Working.css';
import ManConstruction from './Man_Construction_Worker.png';

const Working = () => {
  return (
    <div className="working-container">
      <img src={ManConstruction} alt="Man Construction Worker" />
      <h2>Under Construction</h2>
      <p>We are currently working on this page</p>
    </div>
  );
};

export default Working;
