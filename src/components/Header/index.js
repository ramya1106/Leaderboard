import { Link } from "react-router-dom";
import {
  Navbar,
  LogoSet,
  LogoImg,
  LogoText,
  LogoText1,
  LogoText2,
  ToggleButton,
  NavItems,
  NavItem,
} from "./styledComponents";
import { useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <Navbar>
      <LogoSet>
        <LogoImg
          src="https://res.cloudinary.com/dn9sdbv1o/image/upload/c_crop,w_240,h_120/v1733418538/GDG_Logo_ckymgo.png"
          alt="GDG Logo"
        />
        <LogoText>
          <LogoText1>Google Developer Groups On-Campus</LogoText1>
          <LogoText2>Narayana Engineering College</LogoText2>
        </LogoText>
      </LogoSet>

      <ToggleButton onClick={toggleMenu}>&#9776;</ToggleButton>

      <NavItems show={showMenu}>
        <NavItem as={Link} to="/">
          Leaderboard
        </NavItem>
        <NavItem as={Link} to="/swags">Swags</NavItem>
        <NavItem as={Link} to="/gallery">Gallery</NavItem>
      </NavItems>
    </Navbar>
  );
}

export default Header;
