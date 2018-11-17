import styled from "styled-components";

export default styled.a`
  color: inherit;
  text-decoration: none;
  font-family: 'Roboto Mono', monospace;
  font-size: 12px;
  padding: ${props => props.resume ? 'none' : '5px 10px'};
  outline: 0;
`;