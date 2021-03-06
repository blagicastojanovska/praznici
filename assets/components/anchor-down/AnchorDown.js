import { useTranslation } from "react-i18next";
import StyledAnchorDown from "./styled";

const AnchorDown = ({ scrollToElement }) => {
  const { t } = useTranslation();

  return (
    <StyledAnchorDown
      aria-label={t("anchor_down_title")}
      title={t("anchor_down_title")}
      onClick={scrollToElement}
    />
  );
};

export default AnchorDown;
