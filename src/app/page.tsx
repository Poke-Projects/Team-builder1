"use client";
import { GlobalStyle } from "@/style/global";
import { MainStyled } from "./page.style";
import Image from "next/image";
import { CardTeam } from "@/components/cardTeam";

export default function Home() {
  return (
    <MainStyled>
      <GlobalStyle />
      <div>
        <h1>Oi</h1>
      </div>
    </MainStyled>
  );
}
