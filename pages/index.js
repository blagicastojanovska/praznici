import { useRef } from "react";
import loadable from "@loadable/component";
import SEO from "../assets/components/seo/SEO";
import HeaderComp from "../assets/components/header/HeaderComp";
import LanguagesSwitcher from "../assets/translations/languages-switcher/LanguagesSwitcher";

const Calendar = loadable(() => import("../assets/components/calendar/Calendar"));
const Footer = loadable(() => import("../assets/components/footer/Footer"));

const Homepage = () => {
  const elementToScrollTo = useRef();

  const scrollToElement = () =>
    window.scrollTo({
      top: elementToScrollTo.current.offsetTop,
      behavior: "smooth",
    });

  return (
    <>
      <SEO />
      <LanguagesSwitcher />
      <HeaderComp scrollToElement={scrollToElement} />
      <Calendar elementToScrollTo={elementToScrollTo} />
      <Footer />
    </>
  );
};

export default Homepage;
