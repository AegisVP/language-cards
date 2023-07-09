import styled from "styled-components";

export const StyledRow = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid tomato;
  width: fit-content;
`;

export const StyledTranslationInputWrapper = styled.div`
  width: 310px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledTranslationInput = styled.input`
  width: 290px;
  margin: 2px 5px;
  padding: 2px 5px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
`;

export const StyledCheckInputWrapper = styled.div`
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCheckInput = styled.input`
  margin: 5px 25px;
`;
