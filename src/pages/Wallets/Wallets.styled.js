import styled from "styled-components";

export const WalletsStyle = styled.div`
  min-height: 100vh;
  background-color: #191c2c;
  padding: 20px 100px;

  @media only screen and (max-width: 425px) {
    padding: 20px;
  }
`;

export const WalletListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 40px;

  @media only screen and (max-width: 425px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: 426px) and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const WalletCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 5px;

  border-radius: 8px;

  &:focus,
  &:hover {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  & > img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
  }

  & > div {
    font-size: 11px;
    text-align: center;
  }

  @media only screen and (max-width: 425px) {
    padding: 0px;
    & > img {
      border-radius: 50%;
      width: 40px;
      height: 40px;
    }

    & > div {
      font-size: 12px;
    }
  }
  @media only screen and (min-width: 426px) and (max-width: 768px) {
    & > img {
      border-radius: 50%;
      width: 60px;
      height: 60px;
    }

    & > div {
      font-size: 12px;
    }
  }
`;

export const WalletH1 = styled.h1`
  font-weight: 600px;
  font-size: 2.5rem;
  line-height: 0px;
  margin-block: 32px 8px;

  @media only screen and (max-width: 425px) {
    font-size: unset;
  }
`;
