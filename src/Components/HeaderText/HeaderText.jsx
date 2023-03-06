import React from 'react';

const HeaderText = ({text , customColor ,bgWhite , removePadding}) => {
    return (
        <div className={`d-flex justify-content-center p-3 ` + removePadding}>
          <div className={`line mt-3 me-2 bg-black ` + bgWhite + ` mtop`}></div>
          <h5 className={`ms-2 ` + customColor + ` responsive-font `}> {text} </h5>
          <div className={`line mt-3 ms-2 bg-black ` + bgWhite + ` mtop`}></div>
        </div>
    );
};

export default HeaderText;