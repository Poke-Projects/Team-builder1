"use client";
import { GlobalStyle } from "@/style/global";
import { HomepageStyled } from "./page.style";
import { NavBar } from "@/components/navBar/navBar";
import { CardTeam } from "@/components/cardTeam";

export default function HomePage() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <HomepageStyled>
        <div className="container1">
          <ul>
            <CardTeam />
            <CardTeam />
            <CardTeam />
          </ul>

          <button>Analisar</button>
        </div>

        <div className="container2">
          <ul>
            <CardTeam />
            <CardTeam />
            <CardTeam />
          </ul>

          <div className="listPokemon">
            <div className="pesquisar">
              <input type="text" placeholder="Pesquisar..."></input>
            </div>
            <div className="list"></div>
          </div>
        </div>
      </HomepageStyled>
    </>
  );
}
