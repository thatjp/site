import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeAnimation = styled.div`
  animation: ${fade} .5s;
`;

export default FadeAnimation;
