import { useEffect, useState } from "react";
import { StyledAnswer, StyledCard, StyledQuestion, StyledShowAnswer } from "./Card.styled";

const randomBool = () => Math.random() * 2 > 1;

export const Card = ({ currentCard, answerShown, doShowAnswer }) => {
  const [showTerm, setShowTerm] = useState(randomBool());

  console.log({ showTerm });
  const { term, meaning } = currentCard;
  const questionText = showTerm ? term : meaning;
  const answerText = showTerm ? meaning : term;
  
  useEffect(() => {
    setShowTerm(randomBool());
  }, [currentCard])

  return (
    <StyledCard onClick={doShowAnswer}>
      <StyledQuestion>{questionText}</StyledQuestion>
      <StyledAnswer>{answerShown ? answerText : <StyledShowAnswer>показати відповідь</StyledShowAnswer>}</StyledAnswer>
    </StyledCard>
  );
};
