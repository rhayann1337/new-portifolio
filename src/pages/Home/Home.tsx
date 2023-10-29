import React, { useEffect, useState } from "react";
import {
  Header,
  ModalContent,
  ContainerHome,
  Icon,
  Photo,
  Description,
} from "./styles";
import MenuIcon from "../../assets/menuIcon.svg";
import { Box, Modal } from "@mui/material";
import { isMobile } from "react-device-detect";
import CloseIcon from "@mui/icons-material/Close";
import ProfilePhoto from "../../assets/profile.png";

export const Home: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const text =
    "Hello, I am John Doe, an Art Director and Digital Designer currently available to work as a freelancer or full-time. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (charIndex < text.length) {
        setDisplayText(displayText + text.charAt(charIndex));
        setCharIndex(charIndex + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [charIndex, text, displayText]);

  return (
    <div>
      <Header isMobile={isMobile}>
        {!isMobile && (
          <>
            <a>Instagram</a>
            <a>Github</a>
            <a>Linkedin</a>
            <a>
              Lets talk
              <img
                src="https://www.okler.net/previews/porto/9.9.3/img/demos/personal-portfolio-1/svg/arrow.svg"
                width={25}
                height={25}
                alt="Arrow"
              />
            </a>
          </>
        )}

        <button onClick={() => setShowMenu(true)}>
          <img src={MenuIcon} width={25} height={25} alt="Menu" />
        </button>
        <Modal open={showMenu} onClose={() => setShowMenu(false)}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
            }}
          >
            <ModalContent>
              <Icon onClick={() => setShowMenu(false)}>
                <CloseIcon />
              </Icon>

              <a>Home</a>
              <a>About me</a>
              <a>Projects</a>
              <a>Instagram</a>
              <a>Github</a>
              <a>Linkedin</a>
            </ModalContent>
          </Box>
        </Modal>
      </Header>
      <ContainerHome>
        <Photo>
          <img src={ProfilePhoto} alt="ProfilePhoto" />
        </Photo>
        <Description>
          <p>{displayText}</p>
        </Description>
      </ContainerHome>
    </div>
  );
};
