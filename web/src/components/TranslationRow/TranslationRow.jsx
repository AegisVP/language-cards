import { fetchWrapper } from "utils";
import { StyledCheckInput, StyledCheckInputWrapper, StyledRow, StyledTranslationInput, StyledTranslationInputWrapper } from "./TranslationRow.styled";

export const TranslationRow = ({ translation, usersMap, userDictionary = [] }) => {
  const usersRevMap = new Map();
  const usersArray = [];
  const userDictMap = new Map();
  
  usersMap.forEach((val, key) => {
    usersRevMap.set(val, key);
    usersArray.push(val);
  })

  userDictionary.forEach(({ userId }) => {
    userDictMap.set(userId, true);
  });

  const doOnBlur = e => {
    if (e.target.value === translation[e.target.name]) return; 
    
    saveTranslation({ [e.target.name]: e.target.value })
    translation[e.target.name] = e.target.value;
  }

  const doOnCheck = e => {
    console.log(e);
    saveUserDictionary({ userId: e.target.id, action: e.target.checked ? 'insert' : 'delete' });
  }

  const saveTranslation = ({ term = null, meaning = null}) => {
    if (term === null) term = translation.term;
    if (meaning === null) meaning = translation.meaning;
    fetchWrapper(`/constants/translations/${translation._id}`, { method: "POST", headers: { "content-type": "application/json" }, body: `{"term":"${term}", "meaning":"${meaning}"}` });
    // console.log(`UPDATE translations SET term=${term}, meaning=${meaning} WHERE id=${translation._id}`);
  }

  const saveUserDictionary = ({ userId = null, action}) => {
    if (userId === null || action === null) return;

    if (action === 'insert') {
      fetchWrapper(`/constants/userDictionary`, { method: "INSERT", headers: { "content-type": "application/json" }, body: `{"userId": "${userId}", "translationId": "${translation._id}"}` });
      // console.log(`INSERT INTO user-dictionary (userId, translationId) VALUES ('${userId}', '${translation._id}')`);
    } else if (action === 'delete') {
      fetchWrapper(`/constants/userDictionary/${translation._id}`, { method: 'DELETE' });
      // console.log(`DELETE FROM user-dictionary WHERE userId='${userId}' AND translationId='${translation._id}'`);
    }
  }

  return (
    <StyledRow>
      <StyledTranslationInputWrapper><StyledTranslationInput type="text" name="term" defaultValue={translation.term} onBlur={doOnBlur} /></StyledTranslationInputWrapper>
      <StyledTranslationInputWrapper><StyledTranslationInput type="text" name="meaning" defaultValue={translation.meaning} onBlur={doOnBlur} /></StyledTranslationInputWrapper>
      {usersArray.map(user => <StyledCheckInputWrapper key={user}><StyledCheckInput key={user} type="checkbox" id={user} defaultChecked={userDictMap.get(user) ? true : false} onChange={doOnCheck}/></StyledCheckInputWrapper>)}
    </StyledRow>
  );
}

//      {for(let i = 0; i < 5; i++) {x}}