import { NavLink, useNavigate } from "react-router-dom";
import {
  HomeCardContainer,
  HomeHeroH1,
  HomeHeroH2,
  HomeStyle,
  NavBarStyle,
  NavBarStyleLi,
  NavBarStyleUl,
} from "./Home.styled";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const Card = ({ cardDetail }) => {
  const navigate = useNavigate();
  return (
    // eslint-disable-next-line react/prop-types
    <CardStyle onClick={() => navigate(cardDetail.link)}>
      <h2>
        {
          // eslint-disable-next-line react/prop-types
          cardDetail.title
        }
      </h2>
      <p style={{ paddingInline: "20px", textAlign: "center" }}>
        {
          // eslint-disable-next-line react/prop-types
          cardDetail.description
        }
      </p>
      <Button
        handleClick={
          // eslint-disable-next-line react/prop-types
          () => navigate(cardDetail.link)
        }
      >
        {
          // eslint-disable-next-line react/prop-types
          cardDetail.buttonText
        }
      </Button>
    </CardStyle>
  );
};

// eslint-disable-next-line react/prop-types
const Button = ({ children, handleClick, disabled, style, type }) => {
  return (
    <ButtonStyle
      type={type}
      onClick={handleClick}
      disabled={disabled}
      style={{ ...style }}
    >
      {children}
    </ButtonStyle>
  );
};

const NavBar = () => {
  return (
    <NavBarStyle>
      <NavBarStyleUl>
        <NavBarStyleLi>
          <NavLink to={"/"}>Home</NavLink>
        </NavBarStyleLi>
        <NavBarStyleLi>
          <NavLink to={"/wallets"}>Connect</NavLink>
        </NavBarStyleLi>
        <NavBarStyleLi>
          <NavLink to={"/wallets/#"}>Contact Us</NavLink>
        </NavBarStyleLi>
        <NavBarStyleLi>
          <NavLink to={"/wallets/#"}>FAQ</NavLink>
        </NavBarStyleLi>
      </NavBarStyleUl>
    </NavBarStyle>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const cardDetails = [
    {
      title: "RECTIFICATION",
      description: "Rectification support warranties completely decentralized",
      icon: <></>,
      buttonText: "Select",
      link: "/wallets",
    },
    {
      title: "VALIDATION",
      description: "Validation completely decentralized supports wallet",
      icon: <></>,
      buttonText: "Select",
      link: "/wallets",
    },
    {
      title: "RECOVERY",
      description: "Recovery wallet TATs Dapps with Blockchain and DeFi",
      icon: <></>,
      buttonText: "Select",
      link: "/wallets",
    },
    {
      title: "CLAIM",
      description: "Claim Tokens completely decentralized",
      icon: <></>,
      buttonText: "Select",
      link: "/wallets",
    },
    {
      title: "STAKING POOL",
      description: "Staking pool of completely decentralized supports wallet",
      icon: <></>,
      buttonText: "Select",
      link: "/wallets",
    },
    {
      title: "LP LOCK",
      description:
        "Claim Airdropsto wallet TATs Dapps with Blockchain and DeFi",
      icon: <></>,
      buttonText: "Select",
      link: "/wallets",
    },
    {
      title: "BUY",
      description: "Buy support warranties completely decentralized",
      icon: <></>,
      buttonText: "Select",
      link: "/wallets",
    },
    {
      title: "SELL",
      description: "Sell completely decentralized supports wallet",
      icon: <></>,
      buttonText: "Select",
      link: "/wallets",
    },
    {
      title: "CLAIM AIRDROP",
      description:
        "Claim Airdropsto wallet TATs Dapps with Blockchain and DeFi",
      icon: <></>,
      buttonText: "Select",
      link: "/wallets",
    },
    {
      title: "HARVEST MY STAKINGS",
      description:
        "When you choose to redeem, we'll return your assets to your Spot Wallet the following day.",
      icon: <></>,
      buttonText: "Select",
      link: "/wallets",
    },
    {
      title: "WITHDRAWAL",
      description:
        "A crypto withdrawal is a transaction that allows you to move your cryptocurrency balance off the Revolut platform to an external crypto wallet that you control such as a Ledger or a Trezor.",
      icon: <></>,
      buttonText: "Select",
      link: "/wallets",
    },
    {
      title: "STAKING POOL",
      description:
        "A staking pool allows multiple stakeholders (or bagholders) to combine their computational resources as a way to increase their chances of being rewarded.",
      icon: <></>,
      buttonText: "Select",
      link: "/wallets",
    },
    {
      title: "MIGRATION",
      description: "Migrate tokens to a new contract.",
      icon: <></>,
      buttonText: "Select",
      link: "/wallets",
    },
    {
      title: "ADD TOKENS",
      description:
        "Crypto tokens are a type of cryptocurrency that represents an asset or specific use and reside on their own blockchain.",
      icon: <></>,
      buttonText: "Select",
      link: "/wallets",
    },
    {
      title: "UPDATE MY PORTFOLIOS",
      description:
        "Generate Real-Time Profit and Loss Reports, Your Coin Values, Reports for Taxes and More.",
      icon: <></>,
      buttonText: "Select",
      link: "/wallets",
    },
    {
      title: "PURCHASE TOKEN",
      description:
        "Also, buy bitcoin, ether, and many common cryptocurrencies.",
      icon: <></>,
      buttonText: "Select",
      link: "/wallets",
    },
    {
      title: "MY NFTS",
      description: "view your collection of digital works.",
      icon: <></>,
      buttonText: "Select",
      link: "/wallets",
    },
    {
      title: "STAKING REVIEW",
      description:
        "Interaction between mobile apps and mobile browsers are supported via mobile deep linking Having complete control of your staking.",
      icon: <></>,
      buttonText: "Select",
      link: "/wallets",
    },
    {
      title: "BRIDGE",
      description:
        "enables applications built on different blockchains to communicate with and interact with each other, something which was never before possible, therefore unlocks a groundbreaking development for the blockchain space as a whole. On launch, Ethereum, BSC, Avalanche, and Polygon - four of the leading blockchains and protocols - are supported, with capabilities to add new blockchains built-in to the Alliance Bridge protocol.",
      icon: <></>,
      buttonText: "Select",
      link: "/wallets",
    },
    {
      title: "WHITELIST",
      description: "Get an Early Spot for Minting.",
      icon: <></>,
      buttonText: "Select",
      link: "/wallets",
    },
  ];

  return (
    <HomeStyle>
      <div>
        <NavBar />
        <div style={{ marginBlock: "50px" }}>
          <HomeHeroH1>Decentralized</HomeHeroH1>
          <HomeHeroH2>Platform Wallet</HomeHeroH2>
          <p>Powerful tool for wallet validation.</p>
          <Button variant={"primary"} handleClick={() => navigate("/wallets")}>
            Connect Wallet
          </Button>
        </div>
      </div>
      <div style={{ borderTop: "1px solid grey" }} />
      <HomeCardContainer>
        {cardDetails.map((cardDetail, index) => (
          <Card key={index} cardDetail={cardDetail} />
        ))}
      </HomeCardContainer>
    </HomeStyle>
  );
};

const ButtonStyle = styled.button`
  background-color: #bc3fea;
  color: white;
  font-size: 20px;
  padding: 10px 30px;
  border-radius: 5px;
  border: none;
  margin: 10px 0px;
  cursor: pointer;

  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }
`;

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 10px;
  width: 100%;
  cursor: pointer;
`;
export default Home;
