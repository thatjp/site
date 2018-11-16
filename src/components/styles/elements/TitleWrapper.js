import styled from 'styled-components';

export default styled.h1`
  /* display: inline-block; */
  font-family: 'Roboto Mono', monospace;
  transition: color 0.2s ease;
  color: grey;
  cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; 
  font-size: 16px;
  padding: 5px 10px;

  :hover {
    color: black;
  }
`;
