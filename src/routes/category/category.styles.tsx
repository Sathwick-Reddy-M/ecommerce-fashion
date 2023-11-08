import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  padding: 50px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 30px;

  img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: transform 0.5s ease-in-out, filter 0.5s ease;
    filter: grayscale(50%) contrast(1);
    border-radius: 10px;
    &:hover {
      filter: grayscale(0%) contrast(1.2);
      transform: scale(1.05);
    }
  }
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 0;
`;

