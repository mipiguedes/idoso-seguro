import { styled } from "@stitches/react";
import arrow from "../img/arrow-header.png";

const Button = styled("button", {
  border: 0,
  borderRadius: 10,
  padding: "5px",
  background: "none",
  cursor: "pointer"
});

const Image = styled("img", {
  width: "30px",
  height: "30px",
  objectFit: "contain",
});

export const ReturnButton = ({ onClick }: any) => {
  return (
    <Button onClick={onClick}>
      <Image src={arrow} alt="Seta Voltar" />
    </Button>
  );
};
