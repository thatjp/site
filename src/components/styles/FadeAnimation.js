import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slidein = keyframes`
  from {
     transform: translateX(-100%);
  }

  to {
     transform: translateX(0%);
  }
`;


export const FadeAnimation = styled.div`
  animation: ${fade} 1s;
`;

export const SlideinAnimation = styled.div`
  animation: ${slidein} .5s;
`;
