import styled from 'styled-components';

export const Container = styled.nav`
  background-color: #1ea2ac;
  border-top: 10px solid #0495B5;
  box-sizing: border-box;
  display: ${(props) => props.menuActive ? 'inline' : 'none'};
  left: 0;
  padding: 20px;
  position: absolute;
  top: 65px;
  width: 100%;
  z-index: 10;
  
  @media ( min-width: 720px ) {
    background-color: initial;
    border-top: none;
    display: inline;
    left: initial;
    position: initial;
    top: initial;
  }
`

export const Menus = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: rgba(255, 255, 255, 0.8);
    font-size: 2rem;
    font-weight: bold;
    padding: 5px 0;
    text-decoration: none;
    transition: color 0.5s;
  }

  a + a {
    border-top: 4px solid rgba(255, 255, 255, 0.2);
  }
  
  a:hover {
    color: rgba(0, 0, 0, 0.9);
  }

  @media ( min-width: 720px ) {
    flex-direction: row;
    justify-content: flex-end;
    a + a {
      border-top: initial;
      margin-left: 20px;
    }
  }
`
