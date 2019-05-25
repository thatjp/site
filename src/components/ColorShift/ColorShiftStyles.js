import styled from 'styled-components';

const ColorShiftStyles = styled.div`
  .container {
    display: inline-block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding-bottom: 20px;
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .custom-radio {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
    border: 1px solid white;
    box-shadow: 0 0 1px 0px white inset, 0 0 1px 0px white;
  }

  .day {
    background-color: #eee;
  }

  .night {
    background-color: black;
  }

  .container:hover input ~ .custom-radio.day {
    background-color: lightgrey;
  }

  .container:hover input ~ .custom-radio.night {
    background-color: grey;
  }

  .custom-radio:after {
    content: "";
    position: absolute;
    display: none;
  }

  .container input:checked ~ .custom-radio:after {
    display: block;
  }

  .container .custom-radio:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: transparent;
  }
`;

export default ColorShiftStyles;
