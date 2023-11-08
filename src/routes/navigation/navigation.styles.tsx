import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 25px;
  position: relative;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: auto;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: 500;
  color: #333;
  text-transform: uppercase;
  transition: color 0.3s ease;

  &:hover {
    color: #1a8fff;
  }

  &:not(:last-of-type) {
    margin-right: 20px;
    margin-left: 35px
  }
`;