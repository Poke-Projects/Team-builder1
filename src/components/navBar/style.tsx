import styled from "styled-components";

export const StyledNavBar = styled.header`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 60px;
  padding-right: 60px;
  background-color: #232949;
  border-radius: 0px 0px 128.44px 128.44px;
  height: 80px;
  border: solid 2px #dbff00;
  border-top: none;
  width: 100vw;

  .image-logo {
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 4px;
    width: max-content;
    .image-login {
      width: 20px;
      cursor: pointer;
    }
    button {
      background-color: none;
      border: none;
      font-size: 26px;
      background-color: #232949;
      cursor: pointer;
    }
  }
`;
