import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { ProfileLarge } from "../common/profile";

const PediaContentGrid = (): JSX.Element => {
  return (
    <StyledPediaContentGrid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <ProfileLarge
            animalName="도롱이"
            gender="male"
            classification="도롱뇽"
            imgSrc="https://picsum.photos/200/300"
          ></ProfileLarge>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProfileLarge
            animalName="도롱이"
            gender="male"
            classification="도롱뇽"
            imgSrc="https://picsum.photos/200/300"
          ></ProfileLarge>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProfileLarge
            animalName="도롱이"
            gender="male"
            classification="도롱뇽"
            imgSrc="https://picsum.photos/200/300"
          ></ProfileLarge>
        </Grid>
      </Grid>
    </StyledPediaContentGrid>
  );
};

export default PediaContentGrid;
const StyledPediaContentGrid = styled.section`
  box-sizing: border-box;
  width: 100%;
  border-radius: 32px;
  margin-top: 32px;
  padding: 32px;
  border: ${({ theme }) => theme.colors.brandColors.basaltGray[900]} 8px solid;
  box-shadow: rgb(41, 171, 69) 3px 3px 6px 0px inset,
    rgba(195, 195, 195, 0.5) -3px -3px 6px 1px inset;
  background-color: ${({ theme }) => theme.colors.brandColors.jurassicGreen[300]};
  & div {
    filter: grayscale(100);
  }
`;
