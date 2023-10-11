import styled from "styled-components";

export const ButtonStyle = styled.button`
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
