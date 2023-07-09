import { Outlet } from 'react-router';
import { HeaderBar } from 'components/HeaderBar/HeaderBar';

export const CommonLayout = ({userId, usersList}) => {
  return (
    <>
      <HeaderBar userId={userId} usersList={usersList} />
      <main
        style={{
          margin: 0,
          padding:0,
          height: 'calc(100vh - 70px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '16px',
          color: '#010101',
          background: '#EEEEEE'
        }}
      >
        <Outlet />
      </main>
    </>
  );
};
