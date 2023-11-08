import styled from "styled-components";

import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7; /* Light grey background for subtle contrast on light page */
  border-radius: 10px; /* Rounded corners for a soft, modern look */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Light shadow for some depth */
  padding: 20px;
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 500px; /* Ensures form doesn't stretch too much on larger screens */
  display: flex;
  flex-direction: column;
  gap: 20px; /* Spacing between form elements */

  input {
    padding: 10px;
    border-radius: 5px; /* Slightly rounded corners for inputs */
    border: 1px solid #ccc; /* Subtle border for inputs */
    font-size: 16px; /* Comfortable font size for reading */
    
    &:focus {
      border-color: #a0a0a0; /* Darker border on focus for visibility */
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25); /* Glow effect for focus */
      outline: none; /* Remove default focus outline */
    }
  }

  label {
    font-size: 14px;
    color: #333; /* Dark color for label for readability */
    margin-bottom: 5px;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
  padding: 10px 50px;
  font-size: 1rem; /* Larger font size for button text */
  color: white; /* White text for the button */
  background-color: #4CAF50; /* Green background for a 'go' connotation */
  border-radius: 20px; /* More pronounced rounded corners for the button */
  
  &:hover {
    background-color: #45a049; /* Slightly darker green on hover */
  }
`;
