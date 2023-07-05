import { useState } from "react";
import { StyledAnswer, StyledCard, StyledQuestion, StyledShowAnswer } from "./Card.styled";
import { StyledButton } from "../Common/Common.styled";

const showTerm = Math.random() * 2 > 1;

export const Card = ({ currentCard, doNextCard }) => {
  const { term, translation } = currentCard;
  const questionText = showTerm ? term : translation;
  const answerText = showTerm ? translation : term;
  const [answerShown, setAswerShown] = useState(false);

  const doShowAnswer = () => {
    if (!answerShown) {
      setAswerShown(true);
    } else {
      console.log('next')
      doNextCard();
    }
  };

  return (
    <StyledCard onClick={doShowAnswer}>
      <StyledQuestion>{questionText}</StyledQuestion>
      <StyledAnswer>{answerShown ? answerText : <StyledShowAnswer>показати відповідь...</StyledShowAnswer>}</StyledAnswer>
{/* 
      {answerShown || <StyledButton type="button" onClick={doShowAnswer}>
      </StyledButton>} */}
    </StyledCard>
  );
};
