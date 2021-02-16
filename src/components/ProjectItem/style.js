import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  margin-top: 20px;
  padding: 10px;
  width: 100%;

  @media ( min-width: 720px ) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Content = styled.div`
  align-items: center;
  box-shadow: 0 0 5px 0.2px gray;
  display: flex;
  margin-bottom: 10px;
  width: 100%;

  img {
    border-radius: 5px;
    width: 100px;
  }

  a {
    font-size: 2rem;
    font-weight: bold;
    margin-left: 10px;
  }

  @media ( min-width: 720px ) {
    border-radius: 10px;
    box-shadow: 0 0 10px 0.2px gray;
    box-sizing: border-box;
    flex-direction: column;
    margin: 5px;
    width: 19%;

    img {
      border-radius: 10px;
      width: 100%;
    }
  }
`;