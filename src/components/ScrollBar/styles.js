import styled from 'styled-components';

const ScrollBarStyles = styled.div`
   width: 200px;
   height: 100%;
   display: inline-block;
   overflow: hidden;

   button {
      font-family: 'Roboto Mono', monospace;
      color: ${props => (props.nightTime ? '#fff' : '#000')};
   }

   .title {
      writing-mode: tb-rl;
      transform: rotate(-180deg);
   }

   .line {
      height: 400px;
      display: inline-block;
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
      border-left: 1px solid ${props => (props.nightTime ? '#fff' : '#000')};
      ::-webkit-scrollbar { 
         display: none; 
      }
   }
   
   .timeline-content {
      margin-bottom: 400px;
      border-bottom: 1px solid ${props => (props.nightTime ? '#fff' : '#000')};
   }

   .timeline-content:last-child{
      margin-bottom: 0px;
   }
   
   .timeline-content > h2,button{
      margin: 5px 20px 15px;
   }
`;

export default ScrollBarStyles;
