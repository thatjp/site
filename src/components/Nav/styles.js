import styled from 'styled-components';

const NavStyles = styled.div`
  text-align: right;
  margin-bottom: ${props => (props.mobile ? '20px' : '0')};
  width: ${props => (props.mobile ? '100%' : '130px')};

  ul {
    display: ${props => (props.mobile ? 'flex' : 'block')};
    justify-content: space-around;
  }

  li {
    display: ${props => (props.mobile ? 'inline-block' : 'block')};
    display: block;
    margin-left: 10px;
  }

  li:first-child {
    display: ${props => (props.mobile ? 'inline-block' : 'block')};
    margin-left:${props => (props.mobile ? '0' : '10px')};;
  }
  
  .arrow {
    display: ${props => (props.mobile ? 'none' : 'block')};
    width: 10px;
    float: left;
    margin: 6px 0px;
    margin-right: 10px;
    color: ${props => (props.nightTime ? '#fff' : '#000')};
  }

  h2 {
    font-size: 1rem;
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
  }
`;

export default NavStyles;
