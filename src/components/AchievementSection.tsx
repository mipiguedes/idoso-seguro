import { styled } from "@stitches/react";
import parse from "html-react-parser";

type AchievementSectionProps = {
  title: string;
  text: string;
  image?: string;
  imageAlt?: string;
  imageMedal?: string;
  backgroundColor?: string;
};

export function AchievementSection({
  title,
  text,
  image,
  imageAlt,
  imageMedal,
  backgroundColor,
}: AchievementSectionProps) {
  const Container = styled("div", {
    margin: "1.5em",
    padding: "0.65em",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  });

  const TextArea = styled("div", {
    p: {
      margin: "0.45em 0",
    },
  });

  const AchievementContentContainer = styled("div", {
    overflowY: "auto",
    maxHeight: "calc(100% - 100px)",
  });

  const MedalContainer = styled("div", {
    margin: "1.5em",
    padding: "0.65em",
    backgroundColor: "#E0FFCC",
    border: "3px solid #56A486",
    borderRadius: "10px",
    height: "fit-content",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  });

  const Header = styled("div", {
    display: "flex",
    alignItems: "center",
  });

  const CartoonImage = styled("img", {
    maxWidth: "6.25em",
    maxHeight: "6.25em",
    border: "3px solid #939393",
    borderRadius: "50%",
    boxSizing: "border-box",
    objectFit: "cover",
    objectPosition: 100 % 0,
  });

  const ImageMedal = styled("img", {
    maxWidth: "12.5em",
    maxHeight: "12.5em",
    objectFit: "cover",
  });

  const Title = styled("h2", {
    fontSize: "1em",
    fontWeight: 500,
    color: "#13274A",
    margin: "1em",
    lineHeight: 1.3,
    textAlign: "center",
  });
  return (
    <AchievementContentContainer>
      <Container>
        <Header>
          <CartoonImage src={image} alt={imageAlt} />
          <Title>{parse(title)}</Title>
        </Header>
        <TextArea>{parse(text)}</TextArea>
      </Container>
      <MedalContainer>
        <ImageMedal
          src={imageMedal}
          alt="medalha aspirante em segurança de senhas na internet"
        />
      </MedalContainer>
    </AchievementContentContainer>
  );
}
