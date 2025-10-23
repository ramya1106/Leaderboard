import styled from "styled-components";

import { FaArrowRight } from "react-icons/fa";

export const GalleryContainer = styled.div`
  padding: 24px 120px;
  margin-top: 100px;

  @media(max-width: 768px){
    padding: 24px 32px;
    margin-top: 60px;
  }
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin-top: 32px;
`;

export const GalleryImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const ViewMoreLink = styled.a`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  color: #4889F4;
  font-weight: 500;
  margin-top: 20px;
  text-decoration: none;
  cursor: pointer;
`;

export const ArrowIcon = styled(FaArrowRight)`
    margin-top: 4px;
`;

