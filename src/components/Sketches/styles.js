import styled from 'styled-components';

const SketchesStyles = styled.div`
  li {
    margin-bottom: 5px;
  }
  li a{
    padding-bottom: 3px;
  }
  li a:hover{
    border-bottom: 1px solid ${props => props.theme.grey}
  }
`;

export default SketchesStyles;
