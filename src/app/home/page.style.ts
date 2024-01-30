import styled from "styled-components";
import bgHome from "../../../public/home/bgHome.svg";

export const HomepageStyled = styled.main`
  background-image: url(${bgHome.src});
  background-size: cover;
  width: 100vw;
  height: 100vh;

  .container1 {
    padding: 150px 120px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      display: flex;
      gap: 10px;
    }

    button {
      padding: 5px 50px;
      font-family: "__Lalezar_089e3c";
      font-size: 28px;
      text-align: center;
      border: 2px solid yellow;
      border-radius: 20px;
      background: #232949;
      color: yellow;
      margin: 0;
      font-style: italic;
      cursor: pointer;
    }
  }

  .container2 {
    padding: 10px 120px;
    display: flex;
    flex-direction: row;
    gap: 10px;

    ul {
      display: flex;
      gap: 10px;
      flex-direction: column;

      width: 101px;
    }

    .listPokemon {
      width: 100%;
      height: 500px;
      background: #232949;
      border: 2px solid yellow;
      border-radius: 20px;

      .pesquisar {
        width: 100%;
        height: 50px;
        padding-left: 20px;
        padding-top: 20px;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        input {
          width: 200px;

          padding: 10px;
          border: 2px solid yellow;
          border-radius: 15px;
          background: #232949;
          &::placeholder {
            color: yellow;
            font-family: "__Lalezar_089e3c";
            font-size: 20px;
            font-style: italic;
          }
        }
      }
    }
  }
`;
