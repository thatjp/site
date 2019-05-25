import React from 'react';
import PropTypes from 'prop-types';
import ColorShiftStyles from './ColorShiftStyles';

const ColorShift = ({ handleColorShiftClick}) => (
    <ColorShiftStyles>
      <label className="container">
        <input
          type="radio"
          onClick={() => handleColorShiftClick(true)}
        />
        <span className="custom-radio night"></span>
      </label>
      <label className="container">
        <input
          type="radio"
          onClick={() => handleColorShiftClick(false)}
        />
        <span className="custom-radio day"></span>
      </label>
    </ColorShiftStyles>
);

ColorShift.propTypes = {
  handleColorShiftClick: PropTypes.func.isRequired,
};

export default ColorShift;
