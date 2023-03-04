'use client'
import React from 'react';

const WeAre = ({title , number}) => {
    return (
        <div className="col-md-3 mt-5">
        <div className="text-center text-white">
          <h2 className="fs-5">  {title} </h2>
          <p className='fs-1'> {number}  </p>
        </div>
      </div>
    );
};

export default WeAre;