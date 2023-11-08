import styled from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 400% 400%;
  min-height: 85vh;
  animation: GradientAnimation 30s ease infinite;

  @keyframes GradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`
