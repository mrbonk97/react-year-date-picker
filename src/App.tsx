import React, { useState } from "react";
import { YearCalendarButton } from "./lib/year-calendar-button";

export function App() {
  const [year, setYear] = useState<number | null>(null);

  return (
    <main>
      <YearCalendarButton year={year} setYear={setYear} />
    </main>
  );
}
