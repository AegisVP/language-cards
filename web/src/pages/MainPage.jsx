import { Card } from "components/Card/Card";
import { StyledButton } from "components/Common/Common.styled";
import { useEffect, useCallback, useState } from "react";
import { useParams } from "react-router";

export const MainPage = ({ setUserId, dictionary }) => {
  const paramsUser = useParams().user
  const localStorageUser = localStorage.getItem('userId');
  const userId = paramsUser !== undefined ? paramsUser : localStorageUser !== null ? localStorageUser : null;
  const [answerShown, setAnswerShown] = useState(false);
  
  // eslint-disable-next-line
  const generateNewCard = useCallback((dict = []) => dict[Math.floor(Math.random() * dict.length)], [dictionary]);  
  const [currentCard, setCurrentCard] = useState(generateNewCard(dictionary));

  const doShowAnswer = () => {
    if (answerShown) doNextCard();
    else setAnswerShown(true);
  };

  const doNextCard = useCallback(() => {
    setAnswerShown(false);
    setCurrentCard(generateNewCard(dictionary));
  }, [dictionary, generateNewCard]);

  useEffect(() => {
    doNextCard();
  }, [doNextCard]);

  useEffect(() => {
    if (userId !== null) setUserId(userId);
  }, [userId, setUserId]);

  return (<>
      {currentCard ? (<>
          <Card currentCard={currentCard} answerShown={answerShown} doShowAnswer={doShowAnswer} />
          <StyledButton type="button" onClick={doNextCard} style={{ marginTop: '50px' }}>Далі</StyledButton>
        </>) : ("Завантажую данні ...")}</>);
}