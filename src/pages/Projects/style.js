import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  width: 100%;
  
`;

export const CourseItems = styled.div`
  display: flex;
  width: 100%;

  @media ( min-width: 720px ) {
    width: 80%;
  }
`;

export const ProjectItems = styled.div`
  width: 100%;
  @media ( min-width: 720px ) {
    width: 80%;
  }
`;
