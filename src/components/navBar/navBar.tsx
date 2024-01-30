"use client";
import { StyledNavBar } from "./style";
import loginIcon from "../../../public/navbar/loginIcon.svg";
import logo from "../../../public/navbar/logoTeam.svg";
import Image from "next/image";

export const NavBar = () => {
  return (
    <>
      <StyledNavBar>
        <p>musica</p>
        <Image className="image-logo" src={logo} alt="" />
        <div>
          <Image className="image-login" src={loginIcon} alt={"sdsd"} />
          <button>Login</button>
        </div>
      </StyledNavBar>
    </>
  );
};
