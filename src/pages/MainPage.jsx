import { Card } from "components/Card/Card";
import { StyledButton } from "components/Common/Common.styled";
import { useEffect, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { getDictionary } from "controller/dictionary";

export const MainPage = () => {
  const userId = parseInt(useParams().user || 0);
  const [dictionary, setDictionary] = useState(getDictionary(userId));
  const [answerShown, setAnswerShown] = useState(false);
  const generateNewCard = useCallback(() => dictionary[Math.floor(Math.random() * dictionary.length)],[dictionary]);  
  const [currentCard, setCurrentCard] = useState(generateNewCard());

  const doShowAnswer = () => {
    if (answerShown) doNextCard();
    else setAnswerShown(true);
  };

  const doNextCard = () => {
    setAnswerShown(false);
    setCurrentCard(generateNewCard());
  }

  // useEffect(() => {
  //   setCurrentCard(generateNewCard());
  // }, []);

  useEffect(() => {
    setDictionary(getDictionary(userId));
    setAnswerShown(false);
    setCurrentCard(generateNewCard());
  }, [userId])


  return (
    <>
      <Card currentCard={currentCard} answerShown={answerShown} doShowAnswer={doShowAnswer} />        
      <StyledButton type="button" onClick={doNextCard} style={{marginTop:'50px'}}>
        Далі
      </StyledButton>
    </>
  );
}