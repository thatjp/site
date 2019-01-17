import styled from 'styled-components';

const ProjectsStyles = styled.div`
  li {
    height: 20px;
  }

  li a {
    position: relative;
    color: #000;
    text-decoration: none;
    padding-bottom: 2px;
  }

  li a:hover {
    color: #000;
  }

  li a:before{
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #000;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  li a:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`;

export default ProjectsStyles;
