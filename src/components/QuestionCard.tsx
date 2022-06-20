import { styled } from "@stitches/react";

type QuestionCardProps = {
  question: string;
  image: string;
  imageAlt: string;
};

const QuestionTextCard = styled("div", {
  margin: " 0.5em 1.5em",
  padding: "0.65em",
  backgroundColor: "#FFFFFF",
  borderRadius: "10px",
  height: "fit-content",
  overflowY: "auto",
  maxHeight: "200px",
  display: "flex",
  alignItems: "center",
});

const CartoonImage = styled("img", {
  maxWidth: "4.375em",
  maxHeight: "4.375em",
  border: "3px solid #939393",
  borderRadius: "50%",
  boxSizing: "border-box",
  objectFit: "cover",
  objectPosition: 100 % 0,
  marginRight: "1em",
});

const Title = styled("h2", {
  fontSize: "1em",
  fontWeight: 500,
  color: "#13274A",
  margin: 0,
  lineHeight: 1.3,
});


export function QuestionCard({
  question,
  image,
  imageAlt,
}: QuestionCardProps) {

  

  return (
    <>
      <QuestionTextCard>
        <CartoonImage src={image} alt={imageAlt} />
        <Title>{question}</Title>
      </QuestionTextCard>
     
    </>
  );
}
