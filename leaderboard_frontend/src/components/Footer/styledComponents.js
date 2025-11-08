// styledComponents.js
import styled from "styled-components";

export const FooterSection = styled.footer`
  text-align: center;
  color: #44474aff;
  padding: 16px 8px;
  font-size: 12px;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.08);
  p {
    margin: 0;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
  a {
    color: #44474aff;
    text-decoration: none;
  }
`;

export const Icon = styled.span`
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
