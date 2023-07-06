import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-height: 70px;
  border: none;
  border-bottom: 1px solid #444444;
  margin: 0;
  padding: 10px 50px;
`;

export const StyledHeaderTitle = styled.p`
  position: absolute;
  left: 50%;
  margin: 0 auto;
  font-weight: bold;
  font-size: 24px;
`;

export const StyledNavigation = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;

export const StyledNavigationItem = styled(NavLink)`
  text-decoration: none;
  color: #000000;
  font-weight: bold;
  padding: 15px 10px;
  border: none;
  outline: none;
  font-weight: ${(p) => (p.selected ? "bold" : "normal")};
`;
