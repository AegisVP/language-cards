import styled from "styled-components";

export const StyledCard = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${(p) => p.theme.mp(3, 4)};
  border: 1px solid white;
  border-radius: ${(p) => p.theme.radii.xl};
  box-shadow: ${(p) => p.theme.mp(1, 2, 4)} rgba(0, 0, 0, 0.4);
  min-width: 500px;
  min-height: 200px;
`;

export const StyledQuestion = styled.p`
  margin: ${(p) => p.theme.mp(0, 0, 3)};
  padding: ${(p) => p.theme.mp(0)};
  font-size: ${(p) => p.theme.fontSizes.xxl};
  font-weight: ${(p) => p.theme.fontWeights.bold};
`;

export const StyledAnswer = styled.p`
  margin: ${(p) => p.theme.mp(0)};
  padding: ${(p) => p.theme.mp(0)};
  font-size: ${(p) => p.theme.fontSizes.xl};
  font-weight: ${(p) => p.theme.fontWeights.normal};
  min-height: 40px;
`;

export const StyledShowAnswer = styled.span`
  color: #999999;
`;
