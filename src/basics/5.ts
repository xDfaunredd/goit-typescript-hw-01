enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: string): boolean | undefined => {
  if (
    day === DayOfWeek[DayOfWeek.Saturday] ||
    day === DayOfWeek[DayOfWeek.Sunday]
  ) {
    return true;
  }
};

console.log(isWeekend("Friday"));
