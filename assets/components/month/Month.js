import { useEffect, useState } from "react";
import loadable from "@loadable/component";
import holidays from "../../data/holidays";
import { useTranslation } from "react-i18next";
import { v4 as uuid } from "uuid";
import {
  StyledMonth,
  StyledMonthInner,
  StyledMonthName,
  StyledMonthBody,
  StyledDaysWrapper,
} from "./styled";

const Day = loadable(() => import("../day/Day"));

const Month = ({ title, titleHTML, blanks, daysInMonth }) => {
  const [daysInCurrentMonth, setDaysInCurrentMonth] = useState([]);
  const { t } = useTranslation();

  // MAGIC BELOW :)
  useEffect(() => {
    // find the current month holidays only
    const currentHolidays = holidays.filter((holiday) => holiday.month === title);

    // fill all the days in the days array
    // [{ dayNo: 1, month: 'January', dayNo: 2, month: 'January' ... etc}]
    const days = [...Array(daysInMonth).keys()].map((dayNo) => ({
      dayNo: dayNo + 1,
      month: title,
    }));

    // combine all the days in the month with the current holidays in that month
    // there will be duplicates but continue
    // make sure currentHolidays is first
    const combined = [...currentHolidays, ...days];

    // filter the duplicates and leave only the holiday with the same dayNo as the regular day
    const filtered = combined
      .filter((day, i, array) => array.findIndex((dayClone) => dayClone.dayNo === day.dayNo) === i)
      .sort((a, b) => a.dayNo - b.dayNo);

    // set the newly filtered array to the state
    setDaysInCurrentMonth(filtered);
  }, [daysInMonth, title]);

  const weekdays = [
    `${t("calendar_weekdays_mon")}`,
    `${t("calendar_weekdays_tue")}`,
    `${t("calendar_weekdays_wed")}`,
    `${t("calendar_weekdays_thu")}`,
    `${t("calendar_weekdays_fri")}`,
    `${t("calendar_weekdays_sat")}`,
    `${t("calendar_weekdays_sun")}`,
  ];

  return (
    <StyledMonth>
      <StyledMonthInner>
        <StyledMonthName title={titleHTML}>{titleHTML}</StyledMonthName>
        <StyledMonthBody>
          <StyledDaysWrapper weekdays>
            {weekdays.map((weekday, i) => (
              <Day
                daySpecs={{
                  dayNo: i + 1,
                  title: weekday,
                }}
                weekdays
                key={uuid()}
              />
            ))}
          </StyledDaysWrapper>
          <StyledDaysWrapper>
            {/* leave as many blank days as the month starting day is - 1 */}
            {[...Array(blanks).keys()].map(
              (blank) =>
                blank !== 0 && (
                  <Day
                    monthdays
                    daySpecs={{
                      dayNo: blank,
                      title: blank,
                    }}
                    disabledDays
                    key={uuid()}
                  />
                )
            )}
            {daysInCurrentMonth.map((day) => (
              <Day daySpecs={day} monthdays key={uuid()} />
            ))}
          </StyledDaysWrapper>
        </StyledMonthBody>
      </StyledMonthInner>
    </StyledMonth>
  );
};

export default Month;
