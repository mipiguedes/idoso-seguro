import { styled } from "@stitches/react";
import { ContentCard } from "./ContentCard";

type ContentCardProps = {
  title: string;
  content: string;
  imageUrl: string;
  imageAlt: string;
  buttonPreviousOnClick: any;
  imageButtonPrevious: string;
  buttonNextOnClick: any;
  imageButtonNext: string;
};

const NavigationButtonStyle = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
});

const SpanStyle = styled("h1", {
  fontSize: "2em",
  fontWeight: "700",
  color: "#13274A",
  margin: "0",

  "@media screen and (max-width: 1024px) ": {
    fontSize: "1.5em",
  },
});

const Button = styled("button", {
  backgroundColor: "#FFFFFF",
  border: 0,
  borderRadius: 10,
  margin: "1em 1.5em",
  padding: "1em 2em",
  cursor: "pointer",
  width: "40%",
  height: "fit-content",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around"
});

const Image = styled("img", {
  width: "fit-content",
  height: "fit-content",
  maxWidth: "100px",
  objectFit: "contain",
  padding: "0 0.75em",
  length: 0,

  "@media screen and (max-width: 1024px) ": {
    width: "2em",
    height: "2em",
  },
});

export function ContentSection({
  title,
  content,
  imageUrl,
  imageAlt,
  buttonPreviousOnClick,
  imageButtonPrevious,
  buttonNextOnClick,
  imageButtonNext,
}: ContentCardProps) {
  return (
    <>
      <ContentCard
        title={title}
        content={content}
        imageUrl={imageUrl}
        imageAlt={imageAlt}
      />

      <NavigationButtonStyle>
        <Button onClick={buttonPreviousOnClick}>
          <Image src={imageButtonPrevious} alt="Seta Voltar" />
          <SpanStyle>Voltar</SpanStyle>
        </Button>
        <Button onClick={buttonNextOnClick}>
          <SpanStyle>Continuar</SpanStyle>
          <Image src={imageButtonNext} alt="Seta Prosseguir" />
        </Button>
      </NavigationButtonStyle>
    </>
  );
}
