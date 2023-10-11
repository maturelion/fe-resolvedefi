import styled from "styled-components";

export const NavBarStyle = styled.nav``;
export const NavBarStyleUl = styled.ul`
  padding: 0px;
  display: flex;
  justify-content: flex-end;
`;
export const NavBarStyleLi = styled.li`
  list-style: none;
  margin-inline-start: 20px;

  & > a {
    text-decoration: none;
    color: #848296;
    padding-bottom: 8px;
    font-weight: 600;
  }

  & > a.active {
    color: #bc3fea;
  }

  & > a:hover {
    border-bottom: 3px solid #bc3fea;
  }
`;
