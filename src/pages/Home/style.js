import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const Content = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
  width: 100%;

`;

export const PerfilAbout = styled.div`
  display: flex;
  flex-direction: column;

  @media ( min-width: 720px ) {
    align-items: flex-end;
    flex-direction: row;
    width: 80%;
  }
`;

export const MainProfile = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0 10px 10px;
  padding: 0 10px 10px;

  @media ( min-width: 720px ) {
    width: 75%;
  }
`;

export const PerfilImage = styled.div`
  align-self: center;
  width: 100px;

  img {
    border: 5px solid #0495B5;
    border-radius: 50%;
    max-width: 150px;
    width: 100%;
  }

  @media ( min-width: 720px ) {
    align-self: flex-end;
  }
`;

export const Name = styled.h1`
  border-bottom: 6px solid #103330;
  box-sizing: border-box;
  color: rgba( 255, 255, 255, 1 );
  font-size: 2.4rem;
  margin: 10px 0;
  padding-bottom: 10px;
  text-align: center;

  @media ( min-width: 720px ) {
    text-align: right;
    font-size: 2.8rem;
  }
`;

export const Resume = styled.p`
  color: rgba(255, 255, 255, 1);
  font-size: 1.7rem;
  font-weight: 500;
  text-align: center;

  @media ( min-width: 720px ) {
    font-size: 1.9rem;
  }

  a {
    color: whitesmoke;
    font-size: 1.6rem;
    font-weight: 700;
    transition: color 1s;

    :hover {
      color: #0b0b44;
    }
  }
`;

export const SideProfile = styled.div`
  background-color: #103330;
  border-radius: 10px;
  box-sizing: border-box;
  display: none;
  padding: 10px;

  @media ( min-width: 720px ) {
    display: inline;
    width: 25%;
  }
`;

export const Bio = styled.p`
  color: whitesmoke;
  font-size: 16px;
  text-align: justify;
  
  h1 {
    border-bottom: 4px solid #0495b5;
    font-size: 20px;
    padding: 10px;
  }
  
  p {
    font-size: 19px;
    padding: 8px;
  }

  a {
    color: whitesmoke;
    font-size: 1.6rem;
    font-weight: 700;
    transition: color 1s;

    :hover {
      color: #0b0b44;
    }
  }
`;
