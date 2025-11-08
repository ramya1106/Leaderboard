/*
    - Currently uses data passed via `react-router` state.
    - API MODE: Fetches student data from backend via ID.
  
    To Re-enable API Mode:
      1. Uncomment useParams() for route-based ID access.
      2. Uncomment fetchStudentDetails() logic and its useEffect.
      3. Change apiStatus initial state to apiStatusConstants.initial.
      4. Comment/remove destructuring from `location.state`.
 */

import Header from "../Header";
import Footer from "../Footer";

import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
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
  // const { id } = useParams();  // API MODE: Enable this to get student ID from route
  const location = useLocation(); // STATIC mode: Getting data from router state 
  const { studentData } = location.state || {}; // Comment this when switching to API mode

  /*
    STATIC MODE (default)
    Since no backend call is made, we start in SUCCESS state immediately.
   
    To use API mode again:
      replace `apiStatusConstants.success` with `apiStatusConstants.initial`
      and uncomment the fetch + useEffect below.
   */
  
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.success);
  // const [studentData, setStudentData] = useState(null);  // API MODE: Uncomment when fetching from backend

  const [activeBadge, toggleActiveBadge] = useState("Skill Badges");
  const [animatedProgress, setAnimatedProgress] = useState(0);

  /*
    BACKEND FETCH LOGIC 

    Description:
     - Fetches a single student's data from API by ID.
     - Automatically updates status and handles success/failure UI.
  */

  /*
  const fetchStudentDetails = async () => {
    setApiStatus(apiStatusConstants.loading);
    try {
      const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/students/${id}`);
      const data = await res.json();
      setStudentData(data);
      setApiStatus(apiStatusConstants.success);
    } catch {
      setApiStatus(apiStatusConstants.failure);
    }
  };

  useEffect(() => {
    fetchStudentDetails();
  }, [id]);

  const onRetry = () => fetchStudentDetails(); 
  */

  //  Animated progress bar 

  useEffect(() => {
    if (studentData) {
      const totalProgress = studentData.arcadeGames + studentData.skillBadges;
      const timer = setTimeout(() => {
        setAnimatedProgress(totalProgress);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [studentData]);

  // Main Render Logic: Handles all API states - loading / failure / success

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
            {/* <button
              type="button"
              className="retry-button"
              onClick={onRetry}
            >
              Retry
            </button> */}
          </LoaderContainer>
        );

      case apiStatusConstants.success:
        return (
          <>
          {/* Hero Section - Student Overview */}
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

                  {/* Student Info Section */}
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

            {/* Progress Cards */}
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

            {/* Progress Timeline */}
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
            
            {/* Badge Lists - Conditional rendering for Skill Badges and Arcade Games */}
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
