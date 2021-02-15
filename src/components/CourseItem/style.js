import styled from "styled-components";

export const Container = styled.div`
  align-items: flex-end;
  background-color: whitesmoke;
  border-radius: 10px;
  box-shadow: 0 0 5px 0.1px gray;
  box-sizing: border-box;
  display: flex;
  height: 100px;
  justify-content: center;
  padding: 4px;
  width: 25%;

  @media ( min-width: 720px ) {
    margin-left: 10px;
    max-width: 100px;
  }
`

export const Content = styled.div`
  width: 100%;
`

export const CourseTitle = styled.h2`
  font-size: 1.6rem;
  text-align: center;
`

export const CourseImg = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  img {
    border-radius: 8px;
    box-shadow: 0 0 5px 0.1px gray;
    width: 50px;
  }
`

export const ProjectItems = styled.div``