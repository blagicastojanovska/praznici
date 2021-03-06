import { useTranslation } from "react-i18next";
import { colors } from "../../styles/colors";
import { StyledFooterSection, StyledFooterText, StyledSocialContainer, StyledFooterWrap } from "./styled";
import {
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  ViberShareButton,
  ViberIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterIcon,
  EmailIcon,
} from "react-share";

const Footer = () => {
  const { t } = useTranslation();
  const url = "https://praznici.mk",
    title = "Календар со празници 2021";

  return (
    <StyledFooterSection color={colors.extraDarkBlue}>
      <StyledFooterWrap>
        <div>
          <StyledFooterText>{t("footer_text_1")}</StyledFooterText>
          <StyledSocialContainer>
            <FacebookShareButton url={url} quote={title} className="social-icon">
              <FacebookIcon size={30} />
            </FacebookShareButton>
            <LinkedinShareButton url={url} className="social-icon">
              <LinkedinIcon size={30} />
            </LinkedinShareButton>
            <TwitterShareButton url={url} title={title} className="social-icon">
              <TwitterIcon size={30} />
            </TwitterShareButton>
            <ViberShareButton url={url} title={title} className="social-icon">
              <ViberIcon size={30} />
            </ViberShareButton>
            <WhatsappShareButton url={url} title={title} separator=":: " className="social-icon">
              <WhatsappIcon size={30} />
            </WhatsappShareButton>
            <EmailShareButton url={url} subject={title} className="social-icon">
              <EmailIcon size={30} />
            </EmailShareButton>
          </StyledSocialContainer>
        </div>
        <StyledFooterText>
          {t("footer_text_2")} &copy; 2020 <span>Praznici MK</span> <br /> {t("footer_text_3")}
        </StyledFooterText>
      </StyledFooterWrap>
    </StyledFooterSection>
  );
};

export default Footer;
