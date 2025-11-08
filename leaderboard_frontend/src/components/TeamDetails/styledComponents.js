import styled from "styled-components";

export const TeamContainer = styled.div`
  padding: 24px 120px;
  margin-top: 80px;
  min-height: 72vh;

  @media (max-width: 768px) {
    padding: 32px 24px;
    margin-top: 60px;
  }
`;

export const ImgSet = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: 768px){
    gap: 20px 30px;
  }
`;

export const Member = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TeamImg = styled.img`
  width: 160px;
  border-radius: 80px;
  margin: 10px auto;

  @media (max-width: 768px){
    width: 130px;
    margin-top: 0px;
  }
`;

export const Name = styled.p`
  font-size: 14px;
  margin-top: 5px;
  text-align: center;
  line-height: 1.4;
`;
