import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import LandingAbout from "./LandingAbout";
import Services from "./Services";
import Contact from "./Contact";

const BackgroundImage = styled.div`
  background-image: url("https://images.unsplash.com/photo-1635108199650-8115b597e283?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzc0fHxyZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  text-align: center;
  color: white;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 24px;
  margin-bottom: 30px;
`;

const Quote = styled.p`
  font-style: italic;
  font-size: 18px;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 20px;
`;

// const Button = styled.button`
//   margin-right: 10px;
//   padding: 10px 20px;
//   font-size: 16px;
//   background-color: #ffffff;
//   color: #333333;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
  
//   &:hover {
//     background-color: #eeeeee;
//   }
// `;

const LandingHome = () => {
  return (
    <div>
      <Navbar />
      <BackgroundImage>
        <ContentWrapper>
          <Title>SKYPROPERTIES</Title>
          <Subtitle>Welcome to our House Dealership. Find your dream home today</Subtitle>
          <Quote>"Home is where your story begins."</Quote>
          <ButtonWrapper>
          </ButtonWrapper>
        </ContentWrapper>
      </BackgroundImage>
      <Services />
      <LandingAbout />
      <Contact />
    </div>
  );
};

export default LandingHome;
