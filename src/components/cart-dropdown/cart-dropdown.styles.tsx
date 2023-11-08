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
  border-radius: 10px; /* Rounded corners for a modern look */
  background-color: #333; /* Dark background for the dropdown */
  color: #f0f0f0; /* Light text color for contrast */
  top: 70px;
  right: 30px;
  z-index: 5;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); /* Deeper shadow for a floating effect */
  overflow: hidden; /* Prevents children from breaking the rounded corners */

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
    border-radius: 20px; /* More pronounced rounded corners for buttons */
    font-size: 0.85rem;
    padding: 0 20px;
    &:hover {
      opacity: 0.85; /* Slight transparency effect on hover */
      transform: scale(1.02); /* Small growth effect on hover */
    }
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
  color: #c0c0c0; /* Slightly lighter color for the empty message */
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto; /* Ensures a scrollbar is present when needed */
  scrollbar-width: thin; /* Makes the scrollbar thin */
  scrollbar-color: #555 #333; /* Custom scrollbar colors */
  
  /* Styles for webkit browsers like Chrome and Safari */
  &::-webkit-scrollbar {
    width: 8px; /* Narrow scrollbar for a cleaner look */
  }

  &::-webkit-scrollbar-track {
    background: #333; /* Scrollbar track color */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #555; /* Scrollbar handle color */
    border-radius: 10px; /* Rounded corners for the scrollbar handle */
    border: 2px solid #333; /* Border to separate the handle from the track */
  }
`;
