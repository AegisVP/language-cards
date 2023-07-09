// eslint-disable-next-line 
import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import { getDictionary } from "controller/dictionary";
import { fetchWrapper } from "utils";

import { CommonLayout } from 'components/CommonLayout/CommonLayout';
import { MainPage } from 'pages/MainPage';
import { AssignWords } from 'pages/AssignWords';

// const MainPage2 = lazy(() => import('pages/MainPage'));
// const AssignWords2 = lazy(() => import('components/AssignWords/AssignWords'));

export const App = () => {
  const [userId, setUserId] = useState(null);
  const [dictionary, setDictionary] = useState([]);
  
  const [usersList, setUsersList] = useState([]);

  if (usersList.length === 0) fetchWrapper(`/constants/users`).then(res => setUsersList(res));

  useEffect(() => {
    if (userId !== null) localStorage.setItem('userId', userId);
    getDictionary(userId).then(dict => {
      setDictionary(dict);
    });
  }, [userId])

  return (
    <Suspense fallback={<p>Please wait, loading...</p>}>
      <Routes>
        <Route path="/" element={<CommonLayout userId={userId} usersList={usersList} />}>
          <Route index element={<MainPage setUserId={setUserId} dictionary={dictionary} />} />
          <Route path=":user" element={<MainPage setUserId={setUserId} dictionary={dictionary} />} />
  
          <Route path="/assign" element={<AssignWords usersList={usersList} />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};
