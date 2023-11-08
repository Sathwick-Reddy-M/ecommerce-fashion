import styled from "styled-components";

import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  background-color: #1e1e1e; /* Dark background for contrast */
  padding: 20px;
  border-radius: 12px; /* Slightly rounded corners for modern look */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25); /* Subtle shadow for depth */
`;

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  color: #f0f0f0; /* Light color for readability */
  text-transform: uppercase; /* Modern styling */
  letter-spacing: 1px; /* Spacing for a clean look */
  transition: color 0.3s ease; /* Smooth transition for hover effect */

  &:hover {
    color: #c9c9c9; /* Slightly lighter color on hover */
    text-decoration: none; /* Removing the underline on hover for a clean look */
  }
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 20px; /* Adding a row gap for spacing between the items */

  /* Style for the children items, assuming they might be images */
  > * {
    border-radius: 8px; /* Rounded corners for the items */
    overflow: hidden; /* Hide overflow to maintain rounded corner look */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions */

    &:hover {
      transform: scale(1.03); /* Slight scale up effect on hover */
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Shadow effect for depth */
    }
  }
`;
