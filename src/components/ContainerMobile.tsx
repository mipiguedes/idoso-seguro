import { styled } from "@stitches/react";

const ContainerMobileStyle = styled("div", {
  backgroundColor: "#D8EFFF",
  width: "100%",
  height: "100%",
  maxWidth: "640px",
  maxHeight: "100%",
  fontSize: "14px",
  position: "relative",
  overflow: "hidden",
  length: 0,

  "@media screen and (min-width: 1024px) ": {
    maxWidth: "1280px",
    maxHeight: "100%",
    fontSize: "24px",
  },
});

export const ContainerMobile = ({ children }: any) => {
  return <ContainerMobileStyle>{children}</ContainerMobileStyle>;
};
