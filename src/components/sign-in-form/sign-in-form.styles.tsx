import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  background-color: #494d5b; /* A deep charcoal grey */
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
  color: #f3f3f3; /* Light color for text */

  h2 {
    margin: 10px 0;
    font-size: 2rem; /* Larger font size for headers */
    text-transform: uppercase;
    letter-spacing: 1px; /* Letter spacing for a modern feel */
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 5px; /* This sets a gap between the buttons */

  button {
    // flex: 1; /* This ensures that the buttons take up equal space */
    /* Remove margin-left and margin-right if using gap */
    transition: transform 0.2s; /* Smooth transform transition for interaction */
    width: 50px;
    &:hover {
      transform: translateY(-2px); /* Slight raise effect on hover */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Shadow effect for depth */
    }
  }
`;
