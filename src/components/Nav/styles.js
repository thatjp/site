import styled from 'styled-components';

const NavStyles = styled.div`
  text-align: right;

  li {
    display: ${props => (props.isMobile ? 'inline-block' : 'block')}
  }
  
  .arrow {
    width: 10px;
    float: left;
    margin: 6px 0px;
    color: ${props => (props.nightTime ? '#fff' : '#000')};
  }

  h2 {
    transition: color 0.2s ease;
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
  }
`;

export default NavStyles;
