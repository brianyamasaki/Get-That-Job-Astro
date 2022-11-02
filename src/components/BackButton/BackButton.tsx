import React from 'react';
import type { FunctionComponent } from 'react';
import './BackButton.css';

const Back : FunctionComponent = () => (
  <div className='backButton'>
    <button onClick={() => window.history.back()}>Back</button>
  </div>
);

export default Back;

