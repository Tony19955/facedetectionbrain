import React from 'react';
import './Rank.css';

const Rank = ({name, entries}) => {
  return (
    <div className='rank-container'>
      <div className='rank-title'>
        {`${name}, your current rank is...`}
      </div>
      <div className='rank-number'>
        {entries}
      </div>
    </div>
  );
}

export default Rank;