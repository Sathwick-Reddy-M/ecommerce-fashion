import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  padding: 50px; /* Add padding for some space around the items */
  background-color: #c3bfbf; /* Dark background for the grid */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* Soft shadow for depth */
  margin-top: 30px; /* Ensure some space above the grid container */
  color: white;

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
  color: black; /* White color for the title for high contrast */
  text-transform: uppercase; /* Modern styling with uppercase */
  letter-spacing: 2px; /* More letter spacing for a luxury look */
  margin-top: 0; /* Remove top margin if not necessary */
`;

