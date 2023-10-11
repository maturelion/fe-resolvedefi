import { useState } from "react";
import { Link } from "react-router-dom";
import {
  WalletCard,
  WalletListContainer,
  WalletsStyle,
} from "./Wallets.styled";
import LoadingModal from "@components/LoadingModal/LoadingModal";
import ConnectModal from "@components/ConnectModal/ConnectModal";

const Wallets = () => {
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [showLodingModal, setShowLodingModal] = useState(false);
  const [showConnectModal, setShowConnectModal] = useState(false);

  const wallets = [
    {
      name: "Wallet Connect",
      imageSrc: "/wallets/walletconnect.png",
    },
    {
      name: "Trust",
      imageSrc: "/wallets/trust.png",
    },
    {
      name: "MetaMask",
      imageSrc: "/wallets/metamask.png",
    },
    {
      name: "Ledger",
      imageSrc: "/wallets/ledger.png",
    },
    {
      name: "Xumm",
      imageSrc: "/wallets/xumm.png",
    },
    {
      name: "Ordinals",
      imageSrc: "/wallets/ordinals.png",
    },
    {
      name: "Unisat Wallet",
      imageSrc: "/wallets/unisat.png",
    },
    {
      name: "Sologenic",
      imageSrc: "/wallets/sologenic.png",
    },
    {
      name: "Blockchain",
      imageSrc: "/wallets/blockchain.png",
    },
    {
      name: "Bifrost Wallet",
      imageSrc: "/wallets/bifrost.png",
    },
    {
      name: "BRD Wallet",
      imageSrc: "/wallets/brd.png",
    },
    {
      name: "Coinbase",
      imageSrc: "/wallets/coinbase.png",
    },
    {
      name: "Saitamask Wallet",
      imageSrc: "/wallets/saitama.png",
    },
    {
      name: "Terra Station",
      imageSrc: "/wallets/terra.png",
    },
    {
      name: "Phantom",
      imageSrc: "/wallets/phantom.png",
    },
    {
      name: "Cosmos Station",
      imageSrc: "/wallets/cosmos.png",
    },
    {
      name: "Exodus Wallet",
      imageSrc: "/wallets/exodus.png",
    },
    {
      name: "Rainbow",
      imageSrc: "/wallets/rainbow.png",
    },
    {
      name: "Argent",
      imageSrc: "/wallets/argent.png",
    },
    {
      name: "Binance Chain",
      imageSrc: "/wallets/binance.png",
    },
    {
      name: "Safemoon",
      imageSrc: "/wallets/safemoon.png",
    },
    {
      name: "Gnosis",
      imageSrc: "/wallets/gnosis.png",
    },
    {
      name: "Defi",
      imageSrc: "/wallets/defi.png",
    },
    {
      name: "Pillar",
      imageSrc: "/wallets/pillar.png",
    },
    {
      name: "imToken",
      imageSrc: "/wallets/imtoken.png",
    },
    {
      name: "ONTO",
      imageSrc: "/wallets/onto.png",
    },
    {
      name: "TokenPocket",
      imageSrc: "/wallets/tokenpocket.png",
    },
    {
      name: "Aave",
      imageSrc: "/wallets/aave.png",
    },
    {
      name: "Digitex",
      imageSrc: "/wallets/digitex.png",
    },
    {
      name: "Portis",
      imageSrc: "/wallets/portis.png",
    },
    {
      name: "Formatic",
      imageSrc: "/wallets/formatic.png",
    },
    {
      name: "MathWallet",
      imageSrc: "/wallets/mathwallet.png",
    },
    {
      name: "BitPay",
      imageSrc: "/wallets/bitpay.png",
    },
    {
      name: "ledger Live",
      imageSrc: "/wallets/ledgerlive.png",
    },
    {
      name: "WallETH",
      imageSrc: "/wallets/walleth.png",
    },
    {
      name: "Authereum",
      imageSrc: "/wallets/authereum.png",
    },
    {
      name: "Dharma",
      imageSrc: "/wallets/dharma.png",
    },
    {
      name: "1inch Wallet",
      imageSrc: "/wallets/1inch.png",
    },
    {
      name: "Huobi",
      imageSrc: "/wallets/huobi.png",
    },
    {
      name: "Eidoo",
      imageSrc: "/wallets/eidoo.png",
    },
    {
      name: "MYKEY",
      imageSrc: "/wallets/mykey.png",
    },
    {
      name: "Loopring",
      imageSrc: "/wallets/loopring.png",
    },
    {
      name: "TrustVault",
      imageSrc: "/wallets/trustvault.png",
    },
    {
      name: "Atomic",
      imageSrc: "/wallets/atomic.png",
    },
    {
      name: "Coin98",
      imageSrc: "/wallets/coin98.png",
    },
    {
      name: "Tron",
      imageSrc: "/wallets/tron.png",
    },
    {
      name: "Alice",
      imageSrc: "/wallets/alice.png",
    },
    {
      name: "AlphaWallet",
      imageSrc: "/wallets/alphawallet.png",
    },
    {
      name: "D'CENT",
      imageSrc: "/wallets/dcent.png",
    },
    {
      name: "ZelCore",
      imageSrc: "/wallets/alphawallet.png",
    },
    {
      name: "Nash",
      imageSrc: "/wallets/nash.png",
    },
    {
      name: "CoinMoni",
      imageSrc: "/wallets/coinmoni.png",
    },
    {
      name: "GridPlus",
      imageSrc: "/wallets/gridplus.png",
    },
    {
      name: "CyBravo",
      imageSrc: "/wallets/cybravo.png",
    },
    {
      name: "Tokenary",
      imageSrc: "/wallets/tokenary.png",
    },
    {
      name: "Torus",
      imageSrc: "/wallets/torus.png",
    },
    {
      name: "Spatium",
      imageSrc: "/wallets/spatium.png",
    },
    {
      name: "safePal",
      imageSrc: "/wallets/safepal.png",
    },
    {
      name: "Infinito",
      imageSrc: "/wallets/infinito.png",
    },
    {
      name: "wallet.io",
      imageSrc: "/wallets/walletio.png",
    },
    {
      name: "Ownbit",
      imageSrc: "/wallets/ownbit.png",
    },
    {
      name: "EasyPocket",
      imageSrc: "/wallets/easypocket.png",
    },
    {
      name: "Bridge Wallet",
      imageSrc: "/wallets/bridgewallet.png",
    },
    {
      name: "Sparkpoint",
      imageSrc: "/wallets/sparkpoint.png",
    },
    {
      name: "ViaWallet",
      imageSrc: "/wallets/viawallet.png",
    },
    {
      name: "BitKeep",
      imageSrc: "/wallets/bitkeep.png",
    },
    {
      name: "Vision",
      imageSrc: "/wallets/vision.png",
    },
    {
      name: "PEAKDEFI",
      imageSrc: "/wallets/peakdefi.png",
    },
    {
      name: "Unstoppable",
      imageSrc: "/wallets/unstoppable.png",
    },
    {
      name: "HaloDefi",
      imageSrc: "/wallets/halodefi.png",
    },
    {
      name: "Dok Wallet",
      imageSrc: "/wallets/dok.png",
    },
    {
      name: "Midas",
      imageSrc: "/wallets/midas.png",
    },
    {
      name: "Ellipal",
      imageSrc: "/wallets/ellipal.png",
    },
    {
      name: "KEYRING PRO",
      imageSrc: "/wallets/keyring.png",
    },
    {
      name: "Aktionariat",
      imageSrc: "/wallets/aktionariat.png",
    },
    {
      name: "Talken",
      imageSrc: "/wallets/talken.png",
    },
    {
      name: "Flare",
      imageSrc: "/wallets/flare.png",
    },
    {
      name: "KyberSwap",
      imageSrc: "/wallets/kyberswap.png",
    },
    {
      name: "PayTube",
      imageSrc: "/wallets/paytube.png",
    },
    {
      name: "Linen",
      imageSrc: "/wallets/linen.png",
    },
  ];
  return (
    <>
      <WalletsStyle>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <img src="/walletconnect.png" alt="logo" height={40} width={40} />
          </Link>
          <h1
            style={{
              fontWeight: "600px",
              fontSize: "2.5rem",
              lineHeight: "0px",
              marginBlock: "32px 8px",
            }}
          >
            Connect Wallet
          </h1>
          <h6 style={{ fontSize: "15px" }}>
            Please connect your wallet to continue
          </h6>
        </div>
        <WalletListContainer>
          {wallets.map((wallet, index) => (
            <WalletCard
              key={index}
              onClick={() => {
                setSelectedWallet(wallet);
                setShowLodingModal(true);
                setTimeout(() => {
                  setShowLodingModal(false);
                  setShowConnectModal(true);
                }, 500);
              }}
            >
              <img
                src={wallet.imageSrc}
                alt={wallet.name}
                height={40}
                width={40}
              />
              <div style={{ marginTop: "10px" }}>{wallet.name}</div>
            </WalletCard>
          ))}
        </WalletListContainer>
      </WalletsStyle>
      <LoadingModal
        wallet={selectedWallet}
        showLodingModal={showLodingModal}
        setShowLodingModal={setShowLodingModal}
      />
      <ConnectModal
        setShowConnectModal={setShowConnectModal}
        showConnectModal={showConnectModal}
        wallet={selectedWallet}
      />
    </>
  );
};

export default Wallets;
