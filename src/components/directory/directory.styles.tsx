import styled from "styled-components";

export const DirectoryContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  padding: 20px;
  background-color: #c3bfbf; /* Dark background for high contrast */
  align-content: start;
`;

