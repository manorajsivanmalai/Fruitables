import React, { useState } from 'react';

function StarRating({ totalStars,rate,set }) {


  const handleClick = (star) => {
    set(star);
  };

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
         
            key={index}
            style={{ cursor: 'pointer', fontSize: '30px',padding:'5px' }}
            onClick={() => handleClick(starValue)} 
          >
            {starValue <= rate ? '★' : '☆'}
          </span>
        );
      })}
    </div>
  );
}


export default StarRating;
