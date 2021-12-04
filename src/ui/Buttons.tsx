import styled, {css} from "styled-components";

export const Button = styled.button<{ secondary?: boolean, cancel?: boolean }>(({secondary, cancel}) => css`
  cursor: pointer;
  border: 0;
  width: 227px;
  height: 55px;
  background: #E24666;
  color: white;
  border-radius: 100px;
  font-family: Raleway, sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 23px;
  transition: all 0.3s;

  &:hover {
    background: #FF8FA6;
  }

  &:active {
    background: #B83B54;
  }

  ${secondary && css`
    border: 1px solid #E24666;
    background: white;
    color: #E24666;

    &:hover {
      background: #FFD9D9;
    }

    &:active {
      background: #FFAFAF;
    }
  `}
  ${cancel && css`
    background: #d9e0e8;
    color: #2b3948;
    border-radius: 6px;
    transition: background-color 0.2s ease-in-out;
    width: 35px;
    height: 35px;
    
    &:hover,
    &:focus {
      background: #cbd1d9
    }
  ;
    box-shadow: 0 0 10px rgb(0 0 0 / 20%);
  }

  &:active {
    background: #a6b7c9;
  }

  &:disabled {
    background: #6784a2;
    color: #485e75;
    cursor: default;

  `}
`)
