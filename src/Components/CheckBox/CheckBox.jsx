import React from 'react';

const CheckBox = ({title}) => {
    return (
       
       
       
        <div className="col-md-2">
        <div className="text-center">
          <input type="checkbox" className="check" />
          <p className='text-muted'> {title} </p>
        </div>
      </div>
    );
};

export default CheckBox;