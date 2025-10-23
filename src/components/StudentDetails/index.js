import Header from "../Header";

import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import { MdOutlineMailOutline } from "react-icons/md";

import { TbExternalLink } from "react-icons/tb";

import { BsPersonCheck } from "react-icons/bs";

import { FiGift } from "react-icons/fi";

import { FaEye } from "react-icons/fa";

import {
  StudentDetailsContainer,
  GreetingsContainer,
  Greeting,
  CompletionBadge,
  HeroSection,
  HeroContent,
  HeroTop,
  HeroImage,
  InfoList,
  InfoItem,
  InfoIcon,
  InfoText,
  Description,
  ProgressCardContainer,
  ProgressCard,
  ProgressHeader,
  ProgressTitle,
  ProgressIcon,
  ProgressValue,
  ProgressTrackContainer,
  ProgressTimeline,
  TimelineTrack,
  Position,
  Milestone,
  MilestoneFlag,
  BadgesListContainer,
  BadgeToggleGroup,
  BadgeTypeButton,
  BadgesList,
  BadgeItem,
} from "./styledComponents";

import Footer from "../Footer";

function StudentDetails() {
  const [activeBadge, toggleActiveBadge] = useState("Skill Badges");

  const [animatedProgress, setAnimatedProgress] = useState(0);

  const location = useLocation();

  const { studentData } = location.state || {};

  const totalProgress = studentData.arcadeGames + studentData.skillBadges;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(totalProgress);
    }, 100);
    return () => clearTimeout(timer);
  }, [totalProgress]);

  return (
    <>
      <Header />
      <StudentDetailsContainer>
        <HeroSection>
          <HeroContent>
            <HeroTop>
              <GreetingsContainer>
                <Greeting>Welcome {studentData.name}</Greeting>
                <CompletionBadge>
                  {studentData.totalCompletion === "Yes"
                    ? "Completed"
                    : "In-Progress"}
                </CompletionBadge>
              </GreetingsContainer>

              <InfoList>
                <InfoItem>
                  <InfoIcon as={MdOutlineMailOutline} mail />
                  <InfoText>{studentData.email}</InfoText>
                </InfoItem>

                <InfoItem as="a" href={studentData.profileURL} target="_blank">
                  <InfoIcon as={TbExternalLink} />
                  <InfoText>Google Cloud Skill Boost Profile</InfoText>
                  <InfoIcon as={FaEye} link />
                </InfoItem>

                <InfoItem>
                  <InfoIcon as={BsPersonCheck} />
                  <InfoText>
                    Profile Status: {studentData.profileStatus}
                  </InfoText>
                </InfoItem>

                <InfoItem>
                  <InfoIcon as={FiGift} />
                  <InfoText>
                    {studentData.redemptionStatus === "Yes"
                      ? "Redeemed Credits Successfully"
                      : "Redemption is Pending"}
                  </InfoText>
                </InfoItem>
              </InfoList>
            </HeroTop>
          </HeroContent>

          <HeroImage
            alt="student illustration"
            src="https://res.cloudinary.com/dn9sdbv1o/image/upload/v1761138971/student_tzgym6.png"
          />
        </HeroSection>

        <Description>View your Google Study Jam progress here!</Description>

        {/* Progress - No. of Skill Badges, Arcade Games Completed */}

        <ProgressCardContainer>
          <ProgressCard>
            <ProgressHeader>
              <ProgressTitle>Skill Badges Completed</ProgressTitle>
              <ProgressIcon></ProgressIcon>
            </ProgressHeader>
            <ProgressValue>{studentData.skillBadges}/19</ProgressValue>
          </ProgressCard>
          <ProgressCard>
            <ProgressHeader>
              <ProgressTitle>Arcade Game Completed</ProgressTitle>
              <ProgressIcon></ProgressIcon>
            </ProgressHeader>
            <ProgressValue>{studentData.arcadeGames}/1</ProgressValue>
          </ProgressCard>
        </ProgressCardContainer>

        {/* Milestones Completed - 10, 15, 20 Badges */}

        <ProgressTrackContainer>
          <ProgressTimeline>
            <TimelineTrack progress={animatedProgress} />
            <Position position={animatedProgress}>{animatedProgress}</Position>

            {/* Milestones */}
            <Milestone
              position="10"
              src="https://nxtwave.imgix.net/ccbp-website/portal-dashboard/TA/Milestone-icon.png?auto=format,compress&q=80"
            />
            <Milestone
              position="15"
              src="https://nxtwave.imgix.net/ccbp-website/portal-dashboard/TA/Milestone-icon.png?auto=format,compress&q=80"
            />
            <MilestoneFlag
              position="20"
              src="https://cdn.prod.website-files.com/636e65bc652392383abfa5ea/638dbaba14dc6e8e5854dec4_success-flag%201.svg"
            />
          </ProgressTimeline>
        </ProgressTrackContainer>

        {/* Names of the Badges Completed */}

        <BadgesListContainer>
          {/* Toggle Button to conditional render the list */}
          <BadgeToggleGroup>
            <BadgeTypeButton
              active={activeBadge === "Skill Badges" ? true : false}
              onClick={() => {
                toggleActiveBadge("Skill Badges");
              }}
            >
              Skill Badges
            </BadgeTypeButton>
            <BadgeTypeButton
              active={activeBadge === "Arcade Games" ? true : false}
              onClick={() => {
                toggleActiveBadge("Arcade Games");
              }}
            >
              Arcade Game
            </BadgeTypeButton>
          </BadgeToggleGroup>

          {/* List Based on the active Badge Type */}

          <BadgesList>
            {activeBadge === "Skill Badges"
              ? studentData.skillBadgesList.map((badge) => (
                  <BadgeItem>{badge}</BadgeItem>
                ))
              : studentData.arcadeGamesList.map((badge) => (
                  <BadgeItem>{badge}</BadgeItem>
                ))}
          </BadgesList>
        </BadgesListContainer>
      </StudentDetailsContainer>
      <Footer />
    </>
  );
}

export default StudentDetails;
