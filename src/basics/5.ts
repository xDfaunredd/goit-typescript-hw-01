enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: string) => {
  if (
    day === DayOfWeek[DayOfWeek.Saturday] ||
    day === DayOfWeek[DayOfWeek.Sunday]
  ) {
    return day + ", this is a weekend";
  }
  return day + ", this is a weekday";
};

console.log(isWeekend("Sunday"));
