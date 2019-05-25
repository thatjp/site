import styled from 'styled-components';

const ScrollBarStyles = styled.div`
   height: 70%;
   display: inline-block;
   float: left;
   margin-right: 100px;
   overflow: hidden;

   button {
      
   }

   .title {
      writing-mode: tb-rl;
      transform: rotate(-180deg);
   }

   .line {
      height: 70%;
      display: inline-block;
      overflow: scroll;
      border-left: 2px solid ${props => (props.nightTime ? '#fff' : '#000')};
      ::-webkit-scrollbar { 
         display: none; 
      }
   }
   
   .timeline-content {
      margin-top: 400px;
      border-bottom: 2px solid ${props => (props.nightTime ? '#fff' : '#000')};
   }
`;

export default ScrollBarStyles;
