import styled from 'styled-components';

const NavStyles = styled.div`
  /* width: 200px; */
  
  ul li {
    width: 200px;
  }

  .arrow { 
    width: 10px;
    float: left;
    margin: 3px 0px;
  }

  h2 {
    transition: color 0.2s ease;
    color: grey;
    cursor: pointer;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; 
    font-size: 1rem;
    padding: 5px; 
    margin-left: 10px;
    :hover {
      color: black;
    }
  }
`;

export default NavStyles;
