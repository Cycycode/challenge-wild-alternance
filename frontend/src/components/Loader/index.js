// == Import npm
import React from 'react';

// == Import
import './loader.scss';

// == Import Images
import loader from 'src/assets/images/loader.png';

// == Component
const Loader = () => (
  <div className="loader-content">
    <div className="loader">
      <img src={loader} alt="loader" className="loader-img" />
    </div>
  </div>
);

export default Loader;
