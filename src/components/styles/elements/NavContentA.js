import styled from 'styled-components';

export default styled.a`
  color: inherit;
  text-decoration: none;
  font-family: 'Roboto Mono', monospace;
  font-size: 12px;
  padding: ${props => (props.resume ? 'none' : '5px 10px')};
  outline: 0;
  @media (min-width : 320px) and (max-width : 480px) {
    font-size: 10px;
    top: 25%;
  }
`;
