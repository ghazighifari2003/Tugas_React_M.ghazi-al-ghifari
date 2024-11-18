import React from 'react';
import PropTypes from 'prop-types';

export default function Header({
    imageUrl,
    alt,
    height,
    overlay,
    overlayColor,
    marginTop,
  }) {
    return (
      <header className={`relative w-full ${height} ${marginTop} z-10`}>
        <img
          src="/assets/images/bacgroundbarca.png"
          alt="Logo"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {overlay && (
          <div
            className={`absolute inset-0 flex items-center justify-center ${overlayColor}`}
          >
            <h1 className="text-white text-4xl font-bold">Overlay Text</h1>
          </div>
        )}
      </header>
    );
  }
 
Header.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string,
  height: PropTypes.string,
  overlay: PropTypes.bool,
  overlayColor: PropTypes.string,
};

Header.defaultProps = {
  alt: 'Header Image',
  height: 'h-64', // Default height: 16rem
  overlay: false,
  overlayColor: 'bg-black opacity-50', // Default overlay color
  marginbotom: "mb-20",
};