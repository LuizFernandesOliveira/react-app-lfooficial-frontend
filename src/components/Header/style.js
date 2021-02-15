import styled, { css } from "styled-components";

import { Menu } from 'styled-icons/boxicons-regular';

import { MenuOpen } from 'styled-icons/material-outlined';

export const Container = styled.header`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: #103330;
  padding: 10px 20px;
  position: relative;
  width: 100%;

  @media ( min-width: 720px ) {
    flex-direction: row;
    justify-content: center;
  }
`

export const Content = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  
  @media ( min-width: 720px ) {
    width: 80%;
  }
`

export const Logo = styled.div`
  width: 100%;

  img {
    max-width: 200px;
    width: 100%;
  }
`

export const DisplayMenu = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  button {
    border: none;
    border-radius: 8px;
  }

  @media( min-width: 720px ) {
    display: none;
  }
`

const iconCSS = css`
  background-color: #0495B5;
  border-radius: 8px;
  color: white;
  height: 35px;
  width: 35px;
`

export const ButtonClosed = styled.button``

export const MenuClosedIcon = styled(Menu)`
  ${iconCSS}
  display: ${(props) => props.toggle ? 'none' : 'inline'};
`

export const ButtonOpen = styled.button``

export const MenuOpenIcon = styled(MenuOpen)`
  ${iconCSS}
  display: ${(props) => props.toggle ? 'inline' : 'none'};
`