import styled from "styled-components";

export const StyledButton = styled.button`
  margin: 0;
  background: rgb(210, 255, 210);
  border: 1px solid rgb(50, 255, 50);
  border-radius: ${(p) => p.theme.radii.large};
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  padding: ${(p) => p.theme.mp(2, 4)};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.l};
  outline: none;

  &:hover {
    box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.2);
  }

  &:active {
    box-shadow: inset 3px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
