import { styled } from "@stitches/react";
import { ReturnButton } from "./ReturnButton";
import { HeadingOne } from "./HeadingOne";
import { ProgressBar } from "./ProgressBar";
import { Button } from "./Button";

type HeaderMobileProps = {
  title: string;
  step?: any;
  totalSteps?: any;
  isExitSectionActive?: boolean;
  onClickButtonExit?: Function;
  isProgressBarSection?: boolean;
};

const HeaderMobileStyle = styled("header", {
  backgroundColor: "#13274A",
  padding: "0.5rem",
  height: "fit-content",
  minHeight: "70px",
  borderRadius: "0 0 40px 40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const Menus = styled("div", {
  height: "fit-content",
  display: "flex",
  justifyContent: "space-between",
});

export const HeaderMobile = ({
  title,
  step,
  totalSteps,
  isExitSectionActive = true,
  isProgressBarSection = false,
  onClickButtonExit,
}: HeaderMobileProps) => {
  return (
    <HeaderMobileStyle>
      <Menus>
        {isExitSectionActive === false && (
          <Button
            text={"sair"}
            width={"fit-content"}
            onClick={onClickButtonExit}
            backgroundColor={"#125BDE"}
          />
        )}
      </Menus>
      <HeadingOne text={title} />
      {isProgressBarSection && (
        <ProgressBar step={step} totalSteps={totalSteps}></ProgressBar>
      )}
    </HeaderMobileStyle>
  );
};
