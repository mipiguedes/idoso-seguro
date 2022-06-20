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
  
  const Button = styled("button", {
    backgroundColor: "#FFFFFF",
    border: 0,
    borderRadius: 10,
    margin: "1em 1.5em",
    padding: "0.5em",
    cursor: "pointer",
    width: "fit-content",
    height: "fit-content"
  });
  
  const Image = styled("img", {
    width: "30%",
    height: "30%",
    objectFit: "contain",
  });

export function ContentSection({
  title,
  content,
  imageUrl,
  imageAlt,
  buttonPreviousOnClick,
  imageButtonPrevious,
  buttonNextOnClick,
  imageButtonNext
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
        </Button>
        <Button onClick={buttonNextOnClick}>
          <Image src={imageButtonNext} alt="Seta Prosseguir" />
        </Button>
      </NavigationButtonStyle>
    </>
  );
}
