import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { CardStyle } from "./Card.styled";

const Card = ({ cardDetail }) => {
  const navigate = useNavigate();
  return (
    <CardStyle onClick={() => navigate(cardDetail.link)}>
      <h2>{cardDetail.title}</h2>
      <p style={{ paddingInline: "20px", textAlign: "center" }}>
        {cardDetail.description}
      </p>
      <Button handleClick={() => navigate(cardDetail.link)}>
        {cardDetail.buttonText}
      </Button>
    </CardStyle>
  );
};

export default Card;
