import { useState } from "react";
import { fetchWrapper } from "utils";
import { TranslationRow } from "components/TranslationRow/TranslationRow";
import { StyledCheckInputWrapper, StyledRow, StyledTranslationInputWrapper } from "components/TranslationRow/TranslationRow.styled";

export const AssignWords = ({ usersList }) => {
  const [translations, setTranslations] = useState(null);
  const [userDictionary, setUserDictionary] = useState(null);
  const userDictionaryAssignments = [];

  if (translations === null) fetchWrapper(`/constants/translations`).then(setTranslations);
  if (userDictionary === null) fetchWrapper(`/userDictionary`).then(setUserDictionary);

  const usersMap = new Map();
  for (const {_id, user} of usersList) {
    usersMap.set(user, _id);
  }
  
  console.log({ usersList });

  return usersList.length > 0 ? (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"flex-start"}}>
      AssignWords<br /><br />
      <StyledRow>
        <StyledTranslationInputWrapper>слово</StyledTranslationInputWrapper>
        <StyledTranslationInputWrapper>переклад</StyledTranslationInputWrapper>
        {usersList.length > 0 && usersList.map((user) => <StyledCheckInputWrapper key={user?._id}>{user?.user}</StyledCheckInputWrapper>)}
      </StyledRow>

      {translations.map(translation => (
        <TranslationRow key={translation._id} translation={translation} usersMap={usersMap} userDictionary={userDictionary?.filter(entry => entry.translationId === translation._id)} />
      ))}
    </div>
  ) : (
      'Loading...'
  );
}