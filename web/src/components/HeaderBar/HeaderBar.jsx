import { StyledHeader, StyledHeaderTitle, StyledNavigation, StyledNavigationItem } from "./HeaderBar.styled";

export const HeaderBar = ({ userId = null, usersList = [] }) => {
  return <StyledHeader>
    <StyledHeaderTitle>{usersList.find(({_id, user})=>_id===userId)?.user || ""}</StyledHeaderTitle>
    <StyledNavigation>
      {usersList.length > 0 && usersList.map(({_id, user}) => <StyledNavigationItem key={_id} to={`/${_id}`} selected={_id === userId && 'selected'}>{user}</StyledNavigationItem>)}
    </StyledNavigation>
  </StyledHeader>;
}