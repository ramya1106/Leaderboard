import styled from "styled-components";

import { Link } from "react-router-dom";

export const HomePage = styled.div`
  margin-top: 100px;
  padding: 20px 100px 40px 100px;
  min-height: 72vh;
  @media (max-width: 768px) {
    margin-top: 72px;
    padding: 10px 20px 40px 20px;
  }
`;

export const LeaderboardContainer = styled.div`
  margin-top: 20px;
  background-color: #fff;
  border: 1px solid #cfcfcf;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 32px;
  @media (max-width: 768px) {
    padding: 18px 16px;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  margin-top: 10px;
  padding-left: 10px;
  font-size: 23px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  color: #333;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  max-width: 300px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 8px 12px;
  border-radius: 15px;
  border: 1px solid #ccc;
  font-size: 14px;
  outline: none;
  flex: 1;
  border-right: 1px solid #ccc;

  &:focus {
    border-color: #1a73e8;
  }
`;

export const LeaderboardTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  th,
  td {
    padding: 20px;
    text-align: center;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    color: #333;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: rgb(240, 249, 255);
    font-weight: 600;
  }

  tr:hover {
    background-color: rgb(245, 245, 245);
    cursor: pointer;
  }

  .total-completed {
    background-color: #c9fab6;
  }

  @media (max-width: 768px) {
    .hide-mobile {
      display: none;
    }

    th,
    td {
      padding: 12px;
      font-size: 13px;
    }
  }
`;

export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0;

  .failure-view-img {
    width: 25%;
    margin-bottom: 20px;
  }

  .failure-view-title {
    font-size: 20px;
    color: #000;
    margin: 0px;
  }

  .failure-view-description {
    font-size: 14px;
    color: #000;
  }

  .retry-button {
    font-size: 15px;
    color: #ffffff;
    background-color: #4f46e5;
    padding: 10px 20px;
    border: 0px;
    border-radius: 5px;
    margin: 10px;
  }

  @media (max-width: 768px) {
    .failure-view-img {
      width: 80%;
    }

    .failure-view-title {
      font-size: 16px;
    }

    .failure-view-description {
      font-size: 12px;
    }

    .retry-button {
      font-size: 12px;
      padding: 10px 15px;
    }
  }
`;

export const StyledLink = styled(Link)`
  color: #1a73e8;
  font-size: 18px;
  transition: color 0.2s;

  &:hover {
    color: #800080;
  }
`;
