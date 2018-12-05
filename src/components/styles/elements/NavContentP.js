import styled from 'styled-components';
import posed from 'react-pose';

const Content = posed.div({
  closed: { height: 0 },
  open: { height: 'auto' },
});

const NavContentP = styled(Content)`
  display: inline;
  font-family: 'Roboto Mono', monospace;
  font-size: 12px;
  padding: 5px 10px;
  
  -webkit-user-select: none; /* Chrome/Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
`;

export default NavContentP;
