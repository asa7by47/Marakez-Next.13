import React from 'react';

const HeaderText = ({text , customColor ,bgWhite }) => {
    return (
        <div className="d-flex justify-content-center p-3 ">
          <div className={`line mt-3 me-2 bg-black ` + bgWhite}></div>
          <h5 className={`ms-2 ` + customColor }> {text} </h5>
          <div className={`line mt-3 ms-2 bg-black ` + bgWhite}></div>
        </div>
    );
};

export default HeaderText;