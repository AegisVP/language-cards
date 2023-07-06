import { useParams } from "react-router";
import { StyledHeader, StyledHeaderTitle, StyledNavigation, StyledNavigationItem } from "./HeaderBar.styled";

export const HeaderBar = ({ userList = [] }) => {
  const params = useParams();
  const userId = params.user === undefined ? (parseInt(localStorage.getItem('userId')) || 0) : (parseInt(params.user) || 0);
  localStorage.setItem('userId', userId);
  
  return <StyledHeader>
    <StyledHeaderTitle>{userList.find(user=>user.id===userId).name}</StyledHeaderTitle>
    <StyledNavigation>
      {userList.map(user => <StyledNavigationItem key={user.id} to={`/${user.id}`} selected={user.id === userId && 'selected'}>{user.name}</StyledNavigationItem>)}
    </StyledNavigation>
  </StyledHeader>;
}