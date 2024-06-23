export function getCurrentWeekStatus(dailyStatus) {
  const currentWeekStatus = [];
  const today = new Date(); // This is a Wednesday
  const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
  const startOfWeek = new Date(today); // Copy the date object
  startOfWeek.setDate(today.getDate() - dayOfWeek); // Set to the start of the week

  const daysOfWeek = [];
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(startOfWeek);
    currentDate.setDate(startOfWeek.getDate() + i);
    daysOfWeek.push(currentDate);
  }

  // Comapre the dates with saved dates
  daysOfWeek.map((day) => {
    const findDateIndex = dailyStatus.findIndex((date) => {
      if (date?.taskDate) {
        return (
          new Date(date.taskDate).getDate() == new Date(day).getDate() &&
          new Date(date.taskDate).getMonth() == new Date(day).getMonth()
        );
      }
    });

    const dateStatus = {
      date: day,
      ...(findDateIndex !== -1
        ? dailyStatus[findDateIndex]._doc
        : { taskDate: day, isCompleted: false, status: "None" }),
    };
    if (new Date(day) <= today) {
      dateStatus.isEditable = true;
    }
    currentWeekStatus.push(dateStatus);
  });

  return currentWeekStatus;
}
