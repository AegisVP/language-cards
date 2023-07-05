import { Card } from './Card/Card';

export const App = () => {
  const generateNewIdx = () => {
    return Math.floor(Math.random() * dictionary.length);
  };

  const generateNewCard = () => {
    return dictionary[generateNewIdx()];
  };

  const dictionary = [
    {
      id: 0,
      term: 'könen',
      translation: 'могти (вміти)',
    },
    {
      id: 1,
      term: 'dürfen',
      translation: 'могтп (мати право)',
    },
    {
      id: 2,
      term: 'wollen',
      translation: 'хотіти (дуже сильно)',
    },
    {
      id: 3,
      term: 'möchten',
      translation: 'хотіти (ввічлива форма)',
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
  ];

  let currentCard = generateNewCard();

  console.log(currentCard);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Card currentCard={currentCard} />
      <button type="button" onClick={generateNewCard}>
        Наступна
      </button>
    </div>
  );
};
