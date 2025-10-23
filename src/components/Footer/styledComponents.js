// styledComponents.js
import styled from "styled-components";

export const FooterSection = styled.footer`
  text-align: center;
  color: #44474aff;
  padding: 20px 8px;
  font-size: 15px;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.08);


  p {
    margin: 5px 0;
  }

  a {
    color: #44474aff;
    text-decoration: none;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 15px;

  a {
    font-size: 22px;
  }

  @media(max-width: 768px){
    a {
    font-size: 17px;
  }
`;
