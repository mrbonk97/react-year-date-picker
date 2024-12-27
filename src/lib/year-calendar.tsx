import "./ympicker.css";
import { createPortal } from "react-dom";
import React, { Dispatch, SetStateAction, useEffect } from "react";

interface Props {
  year?: number | null;
  setYear?: Dispatch<SetStateAction<number | null>>;
  setShowPortal?: Dispatch<SetStateAction<boolean>>;
}

export const YearCalendar = ({ year, setYear, setShowPortal }: Props) => {
  const startYear = new Date().getFullYear() - 100;

  const handleClick = (clickedYear: number) => {
    if (setYear) setYear(clickedYear == year ? null : clickedYear);
    if (setShowPortal) setTimeout(() => setShowPortal(false), 100);
  };

  useEffect(() => {
    const scrollYear = year ? year : startYear + 100;
    document.getElementById(`year-button-${scrollYear - 4}`)?.scrollIntoView();
  }, []);

  return createPortal(
    <div className="ympicker-calendar">
      <ul>
        {Array.from({ length: 200 }, (_, index) => (
          <li
            role="button"
            id={`year-button-${startYear + index}`}
            onClick={() => handleClick(startYear + index)}
            aria-selected={index + startYear == year}
            key={`ym-cal-${index}`}
          >
            {startYear + index}
          </li>
        ))}
      </ul>
    </div>,
    document.getElementById("root") ||
      document.getElementById("app") ||
      document.getElementsByTagName("body")[0]
  );
};
