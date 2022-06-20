import { styled } from "@stitches/react";

type ButtonProps = {
  text?: string;
  width?: string;
  backgroundColor?: string;
  onClick: any;
};

export function Button({ text, backgroundColor, width, onClick }: ButtonProps) {
  const ButtonStyle = styled("button", {
    width: `${width}`,
    padding: "0.75em",
    background: `${backgroundColor}`,
    borderRadius: 10,
    border: 0,
    cursor: "pointer",
    fontSize: "1.125em",
    fontWeight: 800,
    color: "#D8EFFF",
  });
  return <ButtonStyle onClick={onClick}>{text}</ButtonStyle>;
}
