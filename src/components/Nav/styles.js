import styled from 'styled-components';

const NavStyles = styled.div`
  margin-right: 200px;
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
    font-size: 16px;
    padding: ${props => (props.first ? '10px 10px 5px 10px' : '5px 10px')}; 
    :hover {
      color: black;
    }
  }
`;

export default NavStyles;
