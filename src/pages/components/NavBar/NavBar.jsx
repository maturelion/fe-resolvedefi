import { NavLink } from "react-router-dom";
import { NavBarStyle, NavBarStyleLi, NavBarStyleUl } from "./NavBar.styled";

const NavBar = () => {
  return (
    <NavBarStyle>
      <NavBarStyleUl>
        <NavBarStyleLi>
          <NavLink to={"/"}>Home</NavLink>
        </NavBarStyleLi>
        <NavBarStyleLi>
          <NavLink to={"/wallets"}>Connect</NavLink>
        </NavBarStyleLi>
        <NavBarStyleLi>
          <NavLink to={"/wallets/#"}>Contact Us</NavLink>
        </NavBarStyleLi>
        <NavBarStyleLi>
          <NavLink to={"/wallets/#"}>FAQ</NavLink>
        </NavBarStyleLi>
      </NavBarStyleUl>
    </NavBarStyle>
  );
};

export default NavBar;
