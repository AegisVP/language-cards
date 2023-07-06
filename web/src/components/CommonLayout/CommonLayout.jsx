import { Outlet } from 'react-router';
import { HeaderBar } from 'components/HeaderBar/HeaderBar';

export const CommonLayout = ({userList, currentCard, doNextCard}) => {
  return (
    <>
      <HeaderBar userList={userList} />
      <main
        style={{
          margin: 0,
          padding:0,
          height: 'calc(100vh - 70px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          background: '#EEEEEE'
        }}
      >
        <Outlet />
      </main>
    </>
  );
};
