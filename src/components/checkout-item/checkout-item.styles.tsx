import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
width: 100%;
display: flex;
min-height: 100px;
border-bottom: 1px solid #eaeaea; // Soften the border color
padding: 20px 0;
font-size: 18px; // Slightly reduce the font size for a more refined look
align-items: center;
transition: background-color 0.2s ease-in-out;

&:hover {
  background-color: #f9f9f9; // Gentle highlight on hover
}
`;

export const ImageContainer = styled.div`
width: 23%;
padding-right: 15px;
img {
  width: 100%;
  height: 100%;
  object-fit: cover; // Ensure the image covers the area
  border-radius: 10px; // Modern rounded corners
}
`;

export const BaseSpan = styled.span`
width: 23%;
display: flex;
align-items: center;
justify-content: center;
`;

export const Quantity = styled(BaseSpan)`
.arrow {
  cursor: pointer;
  margin: 0 0px;
  color: #333;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2); // Slight scale effect on hover
  }
}

.value {
  margin: 0 0px;
}
`;

export const Arrow = styled.div`
cursor: pointer;
`;

export const Value = styled.span`
margin: 0 10px;
`;

export const RemoveButton = styled.div`
padding-left: 12px;
cursor: pointer;
color: #ff6b6b; // Use a color that suggests removal action
transition: color 0.2s ease;

&:hover {
  color: #ff3b3b; // A more intense color on hover for interactivity
}
`;
