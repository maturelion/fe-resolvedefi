import styled from "styled-components";

export const HomeStyle = styled.div`
  margin-inline: 100px;

  @media only screen and (max-width: 425px) {
    margin-inline: 20px;
  }
  @media only screen and (min-width: 426px) and (max-width: 768px) {
    margin-inline: 50px;
  }
`;

export const HomeHeroH1 = styled.h1`
  font-size: 61px;
  font-weight: 700;
  line-height: 0px;

  @media only screen and (max-width: 425px) {
    font-size: 43px;
  }
  @media only screen and (min-width: 426px) and (max-width: 768px) {
    font-size: 43px;
  }
`;

export const HomeHeroH2 = styled.h2`
  font-size: 40px;
  font-weight: 600;

  @media only screen and (max-width: 425px) {
    font-size: 29px;
  }
  @media only screen and (min-width: 426px) and (max-width: 768px) {
    font-size: 29px;
  }
`;

export const HomeCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
  margin-top: 30px;

  @media only screen and (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px 0px;
  }
  @media only screen and (min-width: 426px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
