import { styled } from "@stitches/react";

type ProgressBarProps = {
  step: number;
  totalSteps: number;
};

export const ProgressBar = ({ step, totalSteps }: ProgressBarProps) => {
  const completedSteps =
    (step * 100) / totalSteps <= 100 ? (step * 100) / totalSteps : 100;

  const ContainerStyles = styled("div", {
    height: '0.75em',
    width: "100%",
    backgroundColor: "#F0F9FF",
    borderRadius: 50,
    margin: "0.5em",
  });

  const FillerStyles = styled("div", {
    transition: "width 1s ease-in-out",
    height: "100%",
    width: `${completedSteps}%`,
    backgroundColor: "#56A486",
    borderRadius: "inherit",
    textAlign: "right",
  });

  const LabelStyle = styled("span", {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  });

  const ariaValueNow = completedSteps ? Number(completedSteps) : undefined;

  return (
    <ContainerStyles>
      {/*@ts-ignore*/}
      <FillerStyles
        aria-live="polite"
        role="progressbar"
        aria-valuenow={ariaValueNow}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <LabelStyle />
      </FillerStyles>
    </ContainerStyles>
  );
};
