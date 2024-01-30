"use client";
import { GlobalStyle } from "@/style/global";
import { MainStyled } from "./page.style";

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
