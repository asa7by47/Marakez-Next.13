import React from 'react';
import WeAre from '../WeAre/WeAre';
import './WhoWeAre.css';

const WhoWeAre = () => {
    return (
        <section className="bg-img p-5">
        <div className="text-center text-white">
          <h4 className="">WHO WE ARE </h4>
        </div>
        <div className="container">
          <div className="row">
            <WeAre title="Land Area Of projects" number="+25 M" />
            <WeAre title="BUE" number="+12 M" />
            <WeAre title="Year Of experience" number="+7" />
            <WeAre title="Projects Completed" number="+8" />
          </div>
        </div>
      </section>
    );
    
};

export default WhoWeAre;