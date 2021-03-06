import { useState, useEffect, useRef, useCallback } from "react";
import loadable from "@loadable/component";
import { v4 as uuid } from "uuid";
import { useTranslation } from "react-i18next";
import { getDaysInMonth, getDay, format, startOfMonth } from "date-fns";
import holidays from "../../data/holidays";
import { colors } from "../../styles/colors";
import { Bold, ListUnstyled, Section, Wrap, ListItem, BlockTitle } from "../../styles";
import {
  StyledCalendarInfo,
  StyledPrimaryInfo,
  StyledCodeListItem,
  StyledSquare,
  StyledSecondaryInfo,
  StyledLinkBtn,
  StyledAnchorBtn,
  StyledMonthSlider,
  StyledSliderArrow,
  StyledSliderLabel,
} from "./styled";

const Sidebar = loadable(() => import("../sidebar/Sidebar"));
const Month = loadable(() => import("../month/Month"));

const Calendar = ({ elementToScrollTo }) => {
  const [months, setMonths] = useState([]);
  const SecondaryInfoRef = useRef();
  let scrollDistance = useRef();
  const { t } = useTranslation();

  const monthNames = [
    `${t("calendar_monthNames_jan")}`,
    `${t("calendar_monthNames_feb")}`,
    `${t("calendar_monthNames_mar")}`,
    `${t("calendar_monthNames_apr")}`,
    `${t("calendar_monthNames_may")}`,
    `${t("calendar_monthNames_jun")}`,
    `${t("calendar_monthNames_jul")}`,
    `${t("calendar_monthNames_aug")}`,
    `${t("calendar_monthNames_sep")}`,
    `${t("calendar_monthNames_oct")}`,
    `${t("calendar_monthNames_nov")}`,
    `${t("calendar_monthNames_dec")}`,
  ];

  const stateClassSidebarOpen = "state-sidebar-open",
    stateClassBodyFixed = "state-body-fixed";

  // using a class on the body instead of useState because it was re-rendering the months
  const handleCloseSidebar = useCallback(() => {
    if (document.body.classList.contains(stateClassSidebarOpen)) {
      document.body.classList.remove(stateClassSidebarOpen, stateClassBodyFixed);

      if (document.documentElement.clientWidth < 1000) {
        window.scrollTo(0, scrollDistance.current);
        scrollDistance.current = null;
      }
    }
  }, [scrollDistance, stateClassSidebarOpen]);

  const handleOpenSidebar = (e) => {
    e.stopPropagation();

    if (document.documentElement.clientWidth < 1000) {
      scrollDistance.current = window.scrollY;
    }

    document.body.classList.add(stateClassSidebarOpen);
    setTimeout(() => document.body.classList.add(stateClassBodyFixed), 400);
  };

  const handleBodyPadding = () => {
    if (document.documentElement.clientWidth < 1000) {
      document.body.style.paddingBottom = `${SecondaryInfoRef.current.offsetHeight}px`;
    } else {
      document.body.hasAttribute("style") && document.body.removeAttribute("style");
    }
  };

  // use effect to set all the months at first
  useEffect(() => {
    for (let i = 0; i < 12; i++) {
      setMonths((months) => [...months, new Date(2021, i)]);
    }
  }, []);

  // use effect for the sidebar
  useEffect(() => {
    window.addEventListener("click", handleCloseSidebar);
    window.addEventListener("keyup", (e) => e.keyCode === 27 && handleCloseSidebar());

    return () => {
      window.removeEventListener("click keyup", handleCloseSidebar);
    };
  }, [handleCloseSidebar]);

  // use effect for the body-padding on mobile
  useEffect(() => {
    handleBodyPadding();

    window.addEventListener("resize", handleBodyPadding);

    return () => window.removeEventListener("resize", handleBodyPadding);
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    nextArrow: <StyledSliderArrow type="button" aria-label="Swipe To Next Slide" />,
    prevArrow: <StyledSliderArrow type="button" aria-label="Swipe To Previous Slide" />,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 100000,
        settings: "unslick",
      },
      {
        breakpoint: 999,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Section ref={elementToScrollTo}>
      <StyledCalendarInfo>
        <StyledPrimaryInfo>
          <BlockTitle>{t("calendar_block_title_1")}</BlockTitle>
          <ListUnstyled>
            <StyledCodeListItem color={colors.pink}>{t("calendar_list_item_1")}</StyledCodeListItem>
            <StyledCodeListItem color={colors.yellow}>
              {t("calendar_list_item_2")}
            </StyledCodeListItem>
            <StyledCodeListItem color={colors.greenYellowish}>
              {t("calendar_list_item_3")}
            </StyledCodeListItem>
          </ListUnstyled>
          <BlockTitle>{t("calendar_block_title_2")}</BlockTitle>
          <ListUnstyled>
            <ListItem>
              {t("calendar_list_item_4")} <StyledSquare color={colors.pink}></StyledSquare>{" "}
              {t("calendar_list_item_4_1")} <Bold>{t("calendar_list_item_4_2")}</Bold>.
            </ListItem>
            <ListItem>
              {t("calendar_list_item_5")} <StyledSquare color={colors.yellow}></StyledSquare>{" "}
              {t("calendar_list_item_5_1")}{" "}
              <StyledSquare color={colors.greenYellowish}></StyledSquare>{" "}
              {t("calendar_list_item_5_2")} <Bold>{t("calendar_list_item_5_3")}</Bold>.
            </ListItem>
          </ListUnstyled>
        </StyledPrimaryInfo>
        <StyledSecondaryInfo ref={SecondaryInfoRef}>
          <StyledLinkBtn as="button" onClick={handleOpenSidebar}>
            {t("calendar_anchor_title_1")}
          </StyledLinkBtn>
          <StyledAnchorBtn as="a" href="/">
            {t("calendar_anchor_title_2")}
          </StyledAnchorBtn>
        </StyledSecondaryInfo>
      </StyledCalendarInfo>
      <Wrap background={colors.white}>
        <StyledMonthSlider {...sliderSettings}>
          {months.map((month, i) => (
            <Month
              titleHTML={monthNames[i]}
              title={format(month, "MMMM")}
              blanks={getDay(startOfMonth(month))}
              daysInMonth={getDaysInMonth(month)}
              key={uuid()}
              holidays={holidays.filter((holiday) => holiday.month === format(month, "MMMM"))}
            />
          ))}
        </StyledMonthSlider>
        <StyledSliderLabel>{t("main_page_title")}</StyledSliderLabel>
      </Wrap>
      <Sidebar handleCloseSidebar={handleCloseSidebar} />
    </Section>
  );
};

export default Calendar;
