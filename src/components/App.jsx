import { useState } from 'react';
import { Card } from './Card/Card';
import { StyledButton } from './Common/Common.styled';

export const App = () => {

  const [dictionary, setDictionary] = useState([
    {
      id: 0,
      term: 'könen',
      translation: 'могти (вміти)',
    },
    {
      id: 1,
      term: 'dürfen',
      translation: 'могти (мати право, дозвіл)',
    },
    {
      id: 2,
      term: 'wollen',
      translation: 'хотіти (дуже сильно)',
    },
    {
      id: 3,
      term: 'möchten',
      translation: 'хотів би',
    },
    {
      id: 4,
      term: 'sollen',
      translation: 'повинен (рекомендація)',
    },
    {
      id: 5,
      term: 'müssen',
      translation: 'повинен (мусить)',
    },
    {
      id: 6,
      term: 'mögen',
      translation: 'подобається',
    },
    {
      id: 7,
      term: 'lieben',
      translation: 'люблю',
    },
  ]);
  
  const generateNewIdx = () =>  Math.floor(Math.random() * dictionary.length);
  const generateNewCard = () => dictionary[generateNewIdx()];
  let currentCard = generateNewCard();

  const doNextCard = () => {
    currentCard = generateNewCard();
    window.location.reload(true);
  }

  return (
    <div
      style={{
        margin: 0,
        padding:0,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        background: '#EEEEEE'
      }}
    >
      <Card currentCard={currentCard} doNextCard={doNextCard} />        
      <StyledButton type="button" onClick={doNextCard} style={{marginTop:'50px'}}>
        Далі
      </StyledButton>
    </div>
  );
};
