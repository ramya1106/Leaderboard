import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 48px;
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  box-sizing: border-box;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);


  @media (max-width: 768px) {
    padding: 15px 24px;
  }
`;

export const LogoSet = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  height: 32px;
  width: 48px;
  margin-right: 12px;
`;

export const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoText1 = styled.p`
  color: #050505;
  font-size: 15px;
  margin: 0;
`;

export const LogoText2 = styled.p`
  color: #050505;
  font-size: 14px;
  margin: 0;
`;

export const NavItems = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    display: ${(props) => (props.show ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: #fff;
    width: 180px;
    border-radius: 10px;
    padding: 10px 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

export const NavItem = styled.p`
  color: #050505;
  font-size: 14px;
  margin: 0 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    font-weight: 600;
  }

  @media (max-width: 768px) {
    margin: 0;
    padding: 10px 20px;
  }
`;

export const ToggleButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 26px;
  color: #050505;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
