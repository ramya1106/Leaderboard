import { useState, useEffect } from "react";

import { FaEye } from "react-icons/fa";

import { ThreeDots } from "react-loader-spinner";

import Header from "../Header";

import Footer from "../Footer";

import {
  HomePage,
  LeaderboardContainer,
  HeaderSection,
  Title,
  SearchBarContainer,
  SearchBar,
  LeaderboardTable,
  StyledLink,
  LoaderContainer,
} from "./styledComponents";

const apiStatusConstants = {
  initial: "INITIAL",
  loading: "LOADING",
  success: "SUCCESS",
  failure: "FAILURE",
};

function Home() {
  const [searchName, setSearchName] = useState("");
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);
  const [apiData, setApiData] = useState([]);

  const filteredData = apiData.filter((student) =>
    student.name.toLowerCase().includes(searchName.toLowerCase())
  );

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    setApiStatus(apiStatusConstants.loading);
    try {
      const res = await fetch("/students");
      const data = await res.json();
      setApiData(data);
      setApiStatus(apiStatusConstants.success);
    } catch {
      setApiStatus(apiStatusConstants.failure);
    }
  };

  const onRetry = () => fetchStudents();

  const renderStudentsData = () => {
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return (
          <LoaderContainer data-testid="loader">
            <ThreeDots height={50} width={50} color="#ffffff" visible={true} />
          </LoaderContainer>
        );

      case apiStatusConstants.failure:
        return (
          <tr>
            <td colSpan="7">
              <LoaderContainer>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
                  alt="failure view"
                  className="failure-view-img"
                />
                <h1 className="failure-view-title">
                  Oops! Something Went Wrong
                </h1>
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
            </td>
          </tr>
        );

      case apiStatusConstants.success:
        return filteredData.map((student, index) => (
          <tr
            key={index}
            className={
              student.totalCompletion === "Yes" ? "total-completed" : ""
            }
          >
            <td>{student.sno}</td>
            <td>{student.name}</td>
            <td className="hide-mobile">{student.redemptionStatus}</td>
            <td className="hide-mobile">{student.skillBadges}</td>
            <td className="hide-mobile">{student.arcadeGames}</td>
            <td className="hide-mobile">{student.totalCompletion}</td>
            <td>
              <StyledLink
                to={`/studentDetails/${student.sno}`}
                state={{ studentData: student }}
              >
                <FaEye />
              </StyledLink>
            </td>
          </tr>
        ));
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <HomePage>
        <LeaderboardContainer>
          <HeaderSection>
            <Title>Student Leaderboard</Title>
            <SearchBarContainer>
              <SearchBar
                type="text"
                placeholder="Search leaderboard..."
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
              />
            </SearchBarContainer>
          </HeaderSection>

          <LeaderboardTable>
            <thead>
              <tr>
                <th>S No</th>
                <th>Name</th>
                <th className="hide-mobile">Redemption Status</th>
                <th className="hide-mobile">Skill Badges</th>
                <th className="hide-mobile">Arcade Games</th>
                <th className="hide-mobile">Total Completion</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>{renderStudentsData()}</tbody>
          </LeaderboardTable>
        </LeaderboardContainer>
      </HomePage>
      <Footer />
    </>
  );
}

export default Home;
