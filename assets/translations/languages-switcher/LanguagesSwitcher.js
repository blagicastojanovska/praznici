import React, { useCallback, useEffect, useState } from "react";
import i18next from "i18next";
import {
  StyledLanguagesSwitcher,
  StyledActiveLanguage,
  StyledLanguagesList,
  StyledLanguageTrigger,
} from "./styled";

const languageMap = {
  mk: { label: "mk", active: true },
  en: { label: "en", active: false },
  al: { label: "al", active: false },
};

const LanguagesSwitcher = () => {
  const selectedLng = (typeof window !== "undefined" && localStorage.getItem("i18nextLng")) || "mk";
  const [isLanguagesSwitcherOpen, setLanguagesSwitcherOpen] = useState(false);

  const handleClickOutside = useCallback(() => setLanguagesSwitcherOpen(false), []);

  useEffect(() => {
    document.documentElement.lang = languageMap[selectedLng].label;
  }, [selectedLng]);

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <StyledLanguagesSwitcher
      className={isLanguagesSwitcherOpen ? "state-active" : ""}
      onClick={(e) => e.stopPropagation()}
    >
      <StyledActiveLanguage
        aria-haspopup="true"
        aria-label="Switch Page Language"
        onClick={() => setLanguagesSwitcherOpen(true)}
      >
        {languageMap[selectedLng].label}
      </StyledActiveLanguage>
      <StyledLanguagesList>
        {Object.keys(languageMap)?.map((item) => (
          <li key={item}>
            <StyledLanguageTrigger
              type="button"
              current={item === languageMap[selectedLng].label}
              disabled={item === languageMap[selectedLng].label}
              onClick={() => {
                setLanguagesSwitcherOpen(false);
                i18next.changeLanguage(item);
              }}
            >
              {languageMap[item].label}
            </StyledLanguageTrigger>
          </li>
        ))}
      </StyledLanguagesList>
    </StyledLanguagesSwitcher>
  );
};

export default LanguagesSwitcher;
