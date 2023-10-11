import { useNavigate } from "react-router-dom";
import Button from "@components/Button/Button";
import Card from "@components/Card/Card";
import NavBar from "@components/Navbar/Navbar";
import {
  HomeCardContainer,
  HomeHeroH1,
  HomeHeroH2,
  HomeStyle,
} from "./Home.styled";

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

export default Home;
