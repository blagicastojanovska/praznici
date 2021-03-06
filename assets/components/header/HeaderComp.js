import { useTranslation } from "react-i18next";
import AnchorDown from "../anchor-down/AnchorDown";
import { LineThrough, Bold } from "../../styles";
import {
  StyledHeaderStyles,
  StyledMediaBox,
  StyledContentBox,
  StyledMainTitle,
  StyledIntroText,
  StyledFlowerStyles,
  StyledBubbleStyles,
} from "./styled";

const HeaderComp = ({ scrollToElement }) => {
  const { t } = useTranslation();

  return (
    <StyledHeaderStyles>
      <StyledMediaBox>
        <StyledFlowerStyles src="/img/header/flowers.svg" alt="flowers" />
        <StyledBubbleStyles src="/img/header/bubbles.svg" alt="bubbles" />
        <StyledMainTitle>
          {t("main_page_title")} <span>{t("main_page_country")}</span>
        </StyledMainTitle>
      </StyledMediaBox>
      <StyledContentBox>
        <StyledIntroText>
          <LineThrough>2020</LineThrough> {t("header_intro_text_1")}
        </StyledIntroText>
        <StyledIntroText>
          {t("header_intro_text_2")} <br />
          <Bold>{t("header_intro_text_2_bold")}</Bold> {t("header_intro_text_2_rest")}
        </StyledIntroText>
        <StyledIntroText>{t("header_intro_text_3")}</StyledIntroText>

        <AnchorDown scrollToElement={scrollToElement} />
      </StyledContentBox>
    </StyledHeaderStyles>
  );
};

export default HeaderComp;
