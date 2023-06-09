import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import PediaContent from "./PediaContent";
import PediaSpeciesList from "./PediaSpeciesList";
import { ISpecies } from "./type";

const PediaContainer = (): JSX.Element => {
  const [selectedSpecies, setSelectedSpecies] = useState<ISpecies | null>(null);

  useEffect(() => {
    const lensImg: Element | null = document.querySelector("#lens");
    lensImg?.animate(
      [
        { filter: "none" },
        { filter: "brightness(3)" },
        { filter: "none" },
        { filter: "brightness(3)" },
        { filter: "none" },
        { filter: "brightness(3)" },
        { filter: "none" },
        { filter: "brightness(3)" },
        { filter: "none" },
        { filter: "brightness(3)" },
        { filter: "none" },
      ],
      {
        duration: 1000, // 시간
      },
    );
  }, [selectedSpecies]);

  return (
    <StyledPediaContainer>
      <div id="header">
        <img id="lens" src="./images/PediaHeader.svg"></img>
        <div>
          <div id="redLed"></div>
          <div id="yellowLed"></div>
          <div id="greenLed"></div>
        </div>
        <img id="line" src="./images/PediaHeaderLine.svg"></img>
      </div>
      <div id="main">
        <PediaSpeciesList
          selectedSpecies={selectedSpecies}
          setSelectedSpecies={setSelectedSpecies}
        ></PediaSpeciesList>
        <PediaContent selectedSpecies={selectedSpecies}></PediaContent>
      </div>
    </StyledPediaContainer>
  );
};

export default React.memo(PediaContainer);

const flicker = () => keyframes`
0% {box-shadow: none;
  filter: none;}
10% {
  box-shadow: 0px 0px 13px 4px #fcfcfc;
  filter: brightness(3);
}
20% {box-shadow: none;
  filter: none;}
30% {  
  box-shadow: 0px 0px 5px 2px #fcfcfc;
  filter: brightness(2);
}
40% {box-shadow: none;
  filter: none;}
50% {  
  box-shadow: 0px 0px 7px 3px #fcfcfc;
  filter: brightness(2);
} 
60% {box-shadow: none;
  filter: none;} 
70% {  
  box-shadow: 0px 0px 20px 4px #fcfcfc;
  filter: brightness(3);
} 
80% {box-shadow: none;
  filter: none;} 
90% {  
  box-shadow: 0px 0px 20px 4px #fcfcfc;
  filter: brightness(2);
} 
100% {box-shadow: none;
  filter: none;}
`;

const StyledPediaContainer = styled.main`
  @media screen and (max-width: 900px) {
    margin-top: 140px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 60px;
    margin-bottom: 64px;
  }
  @media screen and (min-width: 900px) {
    margin-top: 156px;
    border-radius: 32px;
    margin-bottom: 32px;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  background-color: ${({ theme }) => theme.colors.red};
  position: relative;
  & #header {
    position: absolute;
    width: 100%;
    & #lens {
      min-width: 70px;
      width: 14vw;
      max-width: 120px;
      position: absolute;
      margin-top: 16px;
      margin-left: 12px;
    }
    & #line {
      position: sticky;
      margin-top: 80px;
      width: 100%;
    }
    & > div {
      position: absolute;
      display: flex;
      justify-content: space-between;
      width: 80px;
      margin-top: 16px;
      left: 30%;
    }
    & #redLed {
      ${({ theme }) => theme.shadow};
      animation: ${flicker} 3s ease infinite;
      width: 16px;
      height: 16px;
      border: 2px solid white;
      border-radius: 12px;
      background-color: ${({ theme }) => theme.colors.red};
    }
    & #yellowLed {
      ${({ theme }) => theme.shadow};
      animation: ${flicker} 7s ease infinite;
      width: 16px;
      height: 16px;
      border: 2px solid white;
      border-radius: 12px;
      background-color: ${({ theme }) => theme.colors.yellow};
    }
    & #greenLed {
      ${({ theme }) => theme.shadow};
      animation: ${flicker} 5s ease infinite;
      width: 16px;
      height: 16px;
      border: 2px solid white;
      border-radius: 12px;
      background-color: ${({ theme }) => theme.colors.green};
    }
  }
  & #main {
    margin-top: 85px;
    display: flex;
    height: calc(100% - 190px);
    flex-grow: 1;
    @media screen and (max-width: 600px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
