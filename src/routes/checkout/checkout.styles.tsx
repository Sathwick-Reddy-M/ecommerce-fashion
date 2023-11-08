import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  background-color: #ffffff; /* A light, clean background */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* A subtle shadow for depth */
  padding: 20px;
  border-radius: 8px; /* Slightly rounded corners */
`;


export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  color: #333; /* Dark color for contrast */
  font-weight: 600; /* Bold font weight for the total amount */
`;

