import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center; // Ensure vertical alignment
  justify-content: space-between;
  padding: 0 30px; // Add padding on both sides
  background-color: #fff; // You can adjust the color to match your design
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); // Subtle shadow for depth
  margin-bottom: 25px;
  position: relative; // For absolute positioning of dropdowns
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: auto; // Allow width to adjust to content
  display: flex;
  align-items: center; // Align the logo vertically
  justify-content: center; // Center the logo horizontally if needed
  margin-right: 50px; // Provide some space between the logo and the links
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center; // Ensure vertical alignment
  justify-content: flex-start; // Align links to the right of the logo
  margin-left: auto; // Push the links to the right
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: 500; // Slightly bolder font for the links
  color: #333; // Darker color for better readability
  text-transform: uppercase; // Modern look with uppercase letters
  transition: color 0.3s ease; // Smooth transition for hover state

  &:hover {
    color: #1a8fff; // Highlight color on hover
  }

  &:not(:last-of-type) {
    margin-right: 20px; // Add space between the links
    margin-left: 35px
  }
`;

// If you have a CartIcon styled component, you may want to adjust it as well
export const CartIcon = styled.div`
  position: relative; // For positioning of cart item count
  cursor: pointer;
  // Add styles for the cart icon...
`;

// Similarly, adjust the CartDropdown if it exists
export const CartDropdown = styled.div`
  position: absolute;
  right: 0;
  top: 70px; // Position below the navigation
  // Add styles for the dropdown...
`;
