import Header from "../Header";
import Footer from "../Footer";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

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
  LoaderContainer,
} from "./styledComponents";

const apiStatusConstants = {
  initial: "INITIAL",
  loading: "LOADING",
  success: "SUCCESS",
  failure: "FAILURE",
};

function StudentDetails() {
  const { id } = useParams(); // mapped to sno
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);
  const [studentData, setStudentData] = useState(null);
  const [activeBadge, toggleActiveBadge] = useState("Skill Badges");
  const [animatedProgress, setAnimatedProgress] = useState(0);

  const fetchStudentDetails = async () => {
    setApiStatus(apiStatusConstants.loading);
    try {
      const res = await fetch(`/students/${id}`);
      const data = await res.json();
      setStudentData(data);
      setApiStatus(apiStatusConstants.success);
    } catch {
      setApiStatus(apiStatusConstants.failure);
    }
  };

  useEffect(() => {
    fetchStudentDetails();
  }, []);

  useEffect(() => {
    if (studentData) {
      const totalProgress = studentData.arcadeGames + studentData.skillBadges;
      const timer = setTimeout(() => {
        setAnimatedProgress(totalProgress);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [studentData]);

  const onRetry = () => fetchStudentDetails();

  const renderStudentView = () => {
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return (
          <LoaderContainer data-testid="loader">
            <ThreeDots height={50} width={50} color="#ffffff" visible={true} />
          </LoaderContainer>
        );

      case apiStatusConstants.failure:
        return (
          <LoaderContainer>
            <img
              src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
              alt="failure view"
              className="failure-view-img"
            />
            <h1 className="failure-view-title">Oops! Something Went Wrong</h1>
            <p className="failure-view-description">
              We cannot seem to find the page you are looking for
            </p>
            <button
              type="button"
              className="retry-button"
              onClick={onRetry}
            >
              Retry
            </button>
          </LoaderContainer>
        );

      case apiStatusConstants.success:
        return (
          <>
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

            <ProgressTrackContainer>
              <ProgressTimeline>
                <TimelineTrack progress={animatedProgress} />
                <Position position={animatedProgress}>{animatedProgress}</Position>

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

            <BadgesListContainer>
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

              <BadgesList>
                {activeBadge === "Skill Badges"
                  ? studentData.skillBadgesList.map((badge, i) => (
                      <BadgeItem key={i}>{badge}</BadgeItem>
                    ))
                  : studentData.arcadeGamesList.map((badge, i) => (
                      <BadgeItem key={i}>{badge}</BadgeItem>
                    ))}
              </BadgesList>
            </BadgesListContainer>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <StudentDetailsContainer>{renderStudentView()}</StudentDetailsContainer>
      <Footer />
    </>
  );
}

export default StudentDetails;
