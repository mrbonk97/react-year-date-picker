import { Dispatch, SetStateAction, useState } from "react";
import { YearCalendar } from "./year-calendar";
import React from "react";

interface Props {
  year?: number | null;
  setYear?: Dispatch<SetStateAction<number | null>>;
}

export const YearCalendarButton = ({ year, setYear }: Props) => {
  const [showPortal, setShowPortal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowPortal((cur) => !cur)}>
        {year || "Pick a Year"}
      </button>
      {showPortal && (
        <YearCalendar
          year={year}
          setYear={setYear}
          setShowPortal={setShowPortal}
        />
      )}
    </div>
  );
};
