import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, utils } from "react-modern-calendar-datepicker";

const DatePicker = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  return (
    <Calendar
      value={selectedDay}
      onChange={setSelectedDay}
      minimumDate={utils().getToday()}
      shouldHighlightWeekends
    />
  );
};

export default DatePicker;