import styled from "styled-components";

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

export default LoadingModal;
