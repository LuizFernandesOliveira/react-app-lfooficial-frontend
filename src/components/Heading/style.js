import styled, { css } from 'styled-components';
import { LeftArrowAlt } from 'styled-icons/boxicons-regular';

export const ProjectsContent = styled.div`
  background-color: rgba(0, 150, 255, 0.7);
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.h1`
  color: rgba(255, 255, 255, 0.8);
  font-size: 2.5rem;
  padding: 10px 0;
  position: relative;
  text-align: center;

  a {
    color: white;
    left: -130px;
    position: absolute;
    top: 7px;
    @media ( min-width: 720px ) {
      left: 10px;
      position: absolute;
      top: 7px;
    }
  }

  @media ( min-width: 720px ) {
    width: 80%;
  }
`

const iconCSS = css`
  height: 35px;
  width: 35px;
`;

export const LeftIcon = styled(LeftArrowAlt)`
  ${iconCSS}
`;