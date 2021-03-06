import { useRef } from "react";
import { StyledDay, StyledTooltip } from "./styled";
import { colors } from "../../styles/colors";

const Day = ({ daySpecs, weekdays, monthdays, disabledDays }) => {
  const ref = useRef();

  const selectedLng = localStorage.getItem("i18nextLng") || "mk";

  return (
    <>
      <StyledDay
        monthdays={monthdays}
        weekdays={weekdays}
        background={
          daySpecs.label === "general"
            ? colors.pink
            : daySpecs.label === "primary"
            ? colors.yellow
            : daySpecs.label === "secondary"
            ? colors.greenYellowish
            : ""
        }
        disabledDays={disabledDays}
        title={daySpecs.title}
        dayNo={daySpecs.dayNo}
        ref={ref}
      >
        {weekdays ? daySpecs.title : daySpecs.dayNo}
      </StyledDay>
      {daySpecs.label && (
        <StyledTooltip
          reference={ref}
          content={
            selectedLng === "en"
              ? daySpecs.titleEN
              : selectedLng === "al"
              ? daySpecs.titleAL
              : daySpecs.titleMK
          }
        />
      )}
    </>
  );
};

export default Day;
