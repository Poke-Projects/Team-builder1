"use client";
import { GlobalStyle } from "@/style/global";
import { HomepageStyled } from "./page.style";
import { NavBar } from "@/components/navBar/navBar";
import { CardTeam } from "@/components/cardTeam";
import Modal from "react-modal";
import { useState } from "react";
import { ModalMainContainer } from "./modal.style";

Modal.setAppElement("#main");

export default function HomePage() {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <HomepageStyled id="main">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(85, 85, 85, 0.438)",
            },
            content: {
              width: "85%",
              height: "750px",
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#232949",
              border: "2px solid #EBFF0A",
              borderRadius: "67px",
            },
          }}
          contentLabel="Example Modal"
        >
          <ModalMainContainer>
            <h2>Hello</h2>
            <button onClick={closeModal}>close</button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
          </ModalMainContainer>
        </Modal>
        <div className="container1">
          <ul>
            <CardTeam />
            <CardTeam />
            <CardTeam />
          </ul>

          <button onClick={openModal}>Analisar</button>
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
