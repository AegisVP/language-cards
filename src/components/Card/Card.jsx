export const Card = ({ currentCard }) => {
  const { id, term, translation } = currentCard;
  const showTerm = Math.random() * 2 > 1;
  const showFirst = showTerm ? term : translation;
  let showSecond = '';

  const showAnswer = () => {
    showSecond = showTerm ? translation : term;
  };

  return (
    <div class="card">
      <p class="text question">{showFirst}</p>
      <p class="text answer">{showSecond}</p>

      <button type="submit" onClick={showAnswer}>
        Відповідь
      </button>
    </div>
  );
};
