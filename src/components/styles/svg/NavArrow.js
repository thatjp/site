import React from 'react';

const NavArrowSvg = ({ nightTime }) => {
  if (nightTime) {
    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 230 300"
        style={{
          enableBackground: 'new 0 0 230 300;', fill: 'none', stroke: '#ffffff', strokeWidth: 46, strokeMiterLimit: 10,
        }}
      >
        <polyline className="st0" points="19.5,25.5 187.94,139.23 18,274 " />
      </svg>
    );
  }
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 230 300"
      style={{
        enableBackground: 'new 0 0 230 300;', fill: 'none', stroke: '#000000', strokeWidth: 46, strokeMiterLimit: 10,
      }}
    >
      <polyline className="st0" points="19.5,25.5 187.94,139.23 18,274 " />
    </svg>
  );
};
export default NavArrowSvg;
