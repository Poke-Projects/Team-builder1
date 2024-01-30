import styled from "styled-components";
import bg from "../../../public/cardTeam/bg.svg";

export const CardTeamStyle = styled.li`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  border: 2px solid #ebff0a;
  list-style: none;
  background-color: #232949;
  display: flex;
  align-items: center;
  justify-content: center;

  .pokemon {
    width: 65%;
    height: 100%;
    background-image: url(${bg.src});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
