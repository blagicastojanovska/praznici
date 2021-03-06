import { v4 as uuid } from "uuid";
import { useTranslation } from "react-i18next";
import holidays from "../../data/holidays";
import { ListItem } from "../../styles";
import {
  StyledSidebar,
  StyledInner,
  StyledHolidaysTitle,
  StyledHolidaysList,
  StyledTriggerCloseSidebar,
} from "./styled";

const generalHolidays = holidays.filter((holiday) => holiday.label === "general"),
  primaryHolidays = holidays.filter((holiday) => holiday.label === "primary"),
  secondaryHolidays = holidays.filter((holiday) => holiday.label === "secondary");

const Sidebar = ({ handleCloseSidebar }) => {
  const selectedLng = (typeof window !== "undefined" && localStorage.getItem("i18nextLng")) || "mk";
  const { t } = useTranslation();

  return (
    <StyledSidebar className="Sidebar">
      <StyledInner onClick={(e) => e.stopPropagation()}>
        <StyledTriggerCloseSidebar
          type="button"
          aria-label="close sidebar"
          onClick={handleCloseSidebar}
        />
        <StyledHolidaysTitle odd styleElement={"/img/brushes/paint_brush_pink.svg"}>
          <span>{t("calendar_list_item_1")}</span>
        </StyledHolidaysTitle>
        <StyledHolidaysList>
          {generalHolidays.map((holiday) => (
            <ListItem key={uuid()}>
              {selectedLng === "en"
                ? holiday.titleEN
                : selectedLng === "al"
                ? holiday.titleAL
                : holiday.titleMK}
            </ListItem>
          ))}
        </StyledHolidaysList>
        <StyledHolidaysTitle styleElement={"/img/brushes/paint_brush_yellow.svg"}>
          <span>{t("calendar_list_item_2")}</span>
        </StyledHolidaysTitle>
        <StyledHolidaysList>
          {primaryHolidays.map((holiday) => (
            <ListItem key={uuid()}>
              {selectedLng === "en"
                ? holiday.titleEN
                : selectedLng === "al"
                ? holiday.titleAL
                : holiday.titleMK}
            </ListItem>
          ))}
        </StyledHolidaysList>
        <StyledHolidaysTitle styleElement={"/img/brushes/paint_brush_greenYellowish.svg"}>
          <span>{t("calendar_list_item_3")}</span>
        </StyledHolidaysTitle>
        <StyledHolidaysList>
          {secondaryHolidays.map((holiday) => (
            <ListItem key={uuid()}>
              {selectedLng === "en"
                ? holiday.titleEN
                : selectedLng === "al"
                ? holiday.titleAL
                : holiday.titleMK}
            </ListItem>
          ))}
        </StyledHolidaysList>
      </StyledInner>
    </StyledSidebar>
  );
};

export default Sidebar;
