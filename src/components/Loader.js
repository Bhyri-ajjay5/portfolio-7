import React from 'react';

function Loader({ fadeOut }) {
  return (
    <div className={`loader-container ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="loader-text">Loading Portfolio...</p>
      </div>
    </div>
  );
}

export default Loader;
