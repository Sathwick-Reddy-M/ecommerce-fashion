import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  background-color: #333;
  color: #f0f0f0;
  top: 70px;
  right: 30px;
  z-index: 5;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  overflow: hidden;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
    border-radius: 20px;
    font-size: 0.85rem;
    padding: 0 20px;
    &:hover {
      opacity: 0.85;
      transform: scale(1.02);
    }
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
  color: #c0c0c0;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #555 #333;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #333;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #555;
    border-radius: 10px;
    border: 2px solid #333;
  }
`;
