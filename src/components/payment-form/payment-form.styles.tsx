import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  min-width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;

    &:focus {
      border-color: #a0a0a0;
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
      outline: none;
    }
  }

  label {
    font-size: 14px;
    color: #333;
    margin-bottom: 5px;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
  padding: 10px 50px;
  font-size: 1rem;
  color: white;
  background-color: #4CAF50;
  border-radius: 20px;

  &:hover {
    background-color: #45a049;
  }
`;