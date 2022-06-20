import { styled } from "@stitches/react";
import parse from "html-react-parser";

type AlertCardProps = {
  image: string;
  imageAlt: string;
  text: string;
};

const ContentCardStyle = styled("div", {
  margin: "1.5em",
  padding: "0.65em",
  backgroundColor: "#FFFFFF",
  borderRadius: "10px",
  height: "fit-content",
  overflowY: "auto",
  maxHeight: "55vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
});

const CartoonImage = styled("img", {
  maxWidth: "6.25em",
  maxHeight: "6.25em",
  border: "3px solid #939393",
  borderRadius: "50%",
  boxSizing: "border-box",
  objectFit: "cover",
  objectPosition: 100 % 0
});

const Title = styled("h2", {
  fontSize: "1em",
  fontWeight: 500,
  color: "#13274A",
  margin: "1em",
  lineHeight: 1.3,
  textAlign: "center"
});

export function AlertCard({ image, imageAlt, text }: AlertCardProps) {
  return (
    <ContentCardStyle>
      <CartoonImage src={image} alt={imageAlt} />
      <Title>{parse(text)}</Title>
    </ContentCardStyle>
  );
}
