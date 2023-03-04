import React from 'react';

const SideBarCheckbox = ({title}) => {
    return (
        <div className="checkbox">
        <label className="ms-2">
        <input type="checkbox"className='me-2' />
           {title} 
           </label>
        </div>
  
    );
};

export default SideBarCheckbox;