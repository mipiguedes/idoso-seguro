import { AchievementSection } from "./AchievementSection";
import { ContainerMobile } from "./ContainerMobile";
import { HeaderMobile } from "./HeaderMobile";
import { styled } from "@stitches/react";

const MedalSectionStyle = styled("div", {
  backgroundColor: "#060D18",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const MedalsSection = () => {
  return (
    <MedalSectionStyle>
      <ContainerMobile>
        <HeaderMobile title="suas conquistas" isProgressBarSection={false} />
        
        <AchievementSection
          title={"Você completou o seu aprendizado sobre senhas"}
          text={
            "<p>Agora você sabe como manter suas senhas seguras na internet!</p><p>Acredite, tão importante quanto não compartilhar sua senha com terceiros é criar senhas bem difíceis de serem desvendadas.</p><p>Essa é sua <b>medalha</b> por sua conquista!</p>"
          }
          image={`festejando.png`}
          imageAlt={"idosa festejando"}
          imageMedal={`emblema.png`}
        />
      </ContainerMobile>
    </MedalSectionStyle>
  );
};
