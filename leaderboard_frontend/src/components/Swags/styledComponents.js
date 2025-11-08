import styled from "styled-components";

export const SwagContainer = styled.div`
  padding: 24px 100px;
  margin-top: 80px;

  @media(max-width: 768px){
    padding: 24px 32px;
    margin-top: 60px;
  }
`;

export const TextCenter = styled.div`
  text-align: center;
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SwagsHeading = styled.h1`
  font-size: 32px;
  color: #4889f4;
  margin-top: 20px;
  span {
    color: #eb493b;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const SwagBoomer = styled.img`
  width: 80px;
  height: auto;

  @media (max-width: 768px) {
    width: 50px;
  }
`;

export const Separator = styled.img`
  width: 80%;
  height: 3px;
  @media(max-width: 768px){
    width: 100%;
  }
`;

export const SwagsSubHeading = styled.h2`
  font-size: 24px;
  margin-top: 30px;
  color: #333;
`;

export const LeadText = styled.p`
  font-size: 18px;
  max-width: 700px;
  margin: 14px auto;
`;

export const SwagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 32px;
`;

export const SwagColumn = styled.div`
  margin: 16px;
  text-align: center;
  @media(max-width: 768px){
    margin: 4px;
  }
`;

export const SwagImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 15px;
`;


export const NoteSection = styled.div`
  max-width: 600px;
  margin: 32px auto;
  text-align: left;
  font-size: 16px;

  a {
    color: #4889f4;
  }
`;
