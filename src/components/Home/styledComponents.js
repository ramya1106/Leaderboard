import styled from "styled-components";

import { Link } from "react-router-dom";

export const HomePage = styled.div`
  margin-top: 100px;
  padding: 20px 100px;
`

export const LeaderboardContainer = styled.div`
  margin-top: 20px;
  background-color: #fff;
  border: 1px solid #cfcfcf;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 32px;
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
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  color: #333;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  max-width: 300px;
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

  th, td {
    padding: 20px;
    text-align: center;
    font-family: 'Inter', sans-serif;
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

  .total-completed{
    background-color: #c9fab6;
  }

  @media (max-width: 768px) {
    .hide-mobile {
      display: none;
    }

    th, td {
      padding: 12px;
      font-size: 13px;
    }
  }
`;

export const StyledLink = styled(Link)`
  color: #1a73e8;
  font-size: 18px;
  transition: color 0.2s;

  &:hover {
    color: #0b57d0;
  }
`;