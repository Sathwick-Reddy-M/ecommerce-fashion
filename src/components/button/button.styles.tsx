import styled from "styled-components";

import { SpinnerContainer } from "../spinner/spinner.styles";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px;
  font-size: 15px;
  background-color: #333745; /* Dark charcoal grey */
  color: #f3f3f3; /* Light grey for text */
  text-transform: uppercase;
  font-family: "Open Sans Condensed", sans-serif;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease; /* Smooth transition for hover effect */

  &:hover {
    background-color: #f3f3f3; /* Light grey for background */
    color: #333745; /* Dark grey for text */
    border: 1px solid #333745; /* Add border on hover */
  }
`;


export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4; /* Google blue */
  color: white;

  &:hover {
    background-color: #357ae8; /* A darker shade of Google blue */
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: #f3f3f3; /* Light grey for background */
  color: #333745; /* Dark grey for text */
  border: 1px solid #333745; /* Dark grey border */

  &:hover {
    background-color: #333745; /* Dark grey for background */
    color: #f3f3f3; /* Light grey for text */
    border: none;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;