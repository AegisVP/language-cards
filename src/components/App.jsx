import { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { CommonLayout } from './CommonLayout/CommonLayout';
import { MainPage } from 'pages/MainPage';

export const App = () => {
  const users = [{ id: 0, name: 'Влад' }, { id: 1, name: 'Еміль' }, { id: 2, name: 'Толік' }];

  return (
    <Suspense fallback={<p>Please wait, loading...</p>}>
      <Routes>
        <Route path="/" element={<CommonLayout userList={users} />}>
          <Route index element={<MainPage />} />
          <Route path=":user" element={<MainPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
