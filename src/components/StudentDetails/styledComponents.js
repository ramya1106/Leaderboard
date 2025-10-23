import styled from "styled-components";

import { TbProgressCheck } from "react-icons/tb";

/* ---------- MAIN CONTAINER ---------- */
export const StudentDetailsContainer = styled.div`
  min-height: 100vh;
  padding: 32px 48px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 80px;
  padding: 20px 120px;

  @media (max-width: 768px) {
    margin-top: 60px;
    padding: 20px 32px;
  }
`;

export const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  flex-wrap: wrap;
`;

export const HeroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const HeroTop = styled.div`
`

/* ---------- GREETINGS SECTION ---------- */

export const GreetingsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;

  @media (max-width: 768px){
    flex-direction: column;
    align-items: flex-start;
    gap: 0px;
  }
`;

export const Greeting = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: #202124;

  @media(max-width: 768px){
    font-size: 21px;
  } 
`;

export const CompletionBadge = styled.span`
  background-color: #e8f0fe;
  color: #1a73e8;
  padding: 6px 16px;
  border-radius: 24px;
  font-weight: 500;
  font-size: 14px;

  @media(max-width: 768px){
    font-sixe: 13px;
  }
`;

/* ---------- STUDENT INFO ---------- */

export const InfoList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 24px 40px; // row-gap 24px, column-gap 40px

  @media(max-width: 768px){
    margin-top: 32px;
    margin-bottom: 16px;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
`;

export const InfoIcon = styled.p`
  font-size: 20px;
  color: ${props => props.link ? "#1a73e8" : "#5f6368"};
  margin-top: ${props => props.link || props.mail ? "3px": "0px"};
`;

export const InfoText = styled.p`
  font-size: 16px;
  color: #202124;
  margin: 0;
  padding: 0;
  
`;

export const Description = styled.p`
  font-size: 18px;
  color: #5f6368;
  @media(max-width: 768px){
    font-size: 17px;
  }
`;

export const HeroImage = styled.img`
  width: 124px;
  height: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`


/* ---------- PROGRESS CARDS ---------- */
export const ProgressCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 20px;
`;

export const ProgressCard = styled.div`
  flex: 1 1 260px;
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  @media(max-width: 768px){
    padding: 12px 24px;
  }
`;

export const ProgressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProgressTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-top: 12px;
`;

export const ProgressIcon = styled(TbProgressCheck)`
  font-size: 19px;
`;

export const ProgressValue = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: #1a73e8;
  margin-bottom: 10px;
  @media(max-width: 768px){
    font-size: 21px;
  }
`;

/* ---------- MILESTONES / TIMELINE ---------- */
export const ProgressTrackContainer = styled.div`
  background-color: #A5B4FC;
  height: 100px;
  padding: 24px 32px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  @media(max-width: 768px){
    padding: 20px 24px 20px 18px;
  }
`

export const ProgressTimeline = styled.div`
  position: relative;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background-color: #e0e0e0;
`;

export const TimelineTrack = styled.div`
  width: ${({ progress }) => progress * 5}%;
  height: 100%;
  background-color: #1a73e8;
  border-radius: 5px;
  transition: width 1s ease-in-out;
`;

export const Milestone = styled.img`
  position: absolute;
  top: -20px;
  left: ${({ position }) => position * 5}%;
  transform: translateX(-50%);
  width: 40px;
  @media(max-width: 768px){
    width: 20px;
    top: -8px;
  }
`;

export const Position = styled.p`
  position: absolute;
  top: 4px;
  left: calc(${({ position }) => position * 5}% - 2px);
  transform: translateX(-50%);
  color: #414447ff;
  font-size: 17px;
  font-weight: 500;
  @media(max-width: 768px){
    top: -1px;
  }
`

export const MilestoneFlag = styled(Milestone)`
  top: -50px;
  width: 60px;
  @media(max-width: 768px){
    width: 40px;
    top: -32px;
  }
`

/* ---------- BADGES SECTION ---------- */
export const BadgesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  background-color: #f8f9fa;
  padding: 32px 24px;
  border-radius: 20px;
  margin-bottom: 20px;
  @media(max-width: 768px){
    padding: 24px 16px;
  }
`;

export const BadgeToggleGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

export const BadgeTypeButton = styled.button`
  background-color: ${({ active }) => (active ? "#1a73e8" : "#e8f0fe")};
  color: ${({ active }) => (active ? "#fff" : "#1a73e8")};
  border: none;
  padding: 8px 16px;
  border-radius: 16px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #1a73e8;
    color: #fff;
  }
`;

export const BadgesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 0;
  @media(max-width: 768px){
    margin-top: 8px;
  }
`;

export const BadgeItem = styled.li`
  background-color: #fff;
  padding: 13px 16px;
  border-radius: 8px;
  font-size: 18px;
  border-left: 4px solid #1a73e8;

  @media(max-width: 768px){
    padding: 10px 13px;
    font-size: 15px;
  }
`;

