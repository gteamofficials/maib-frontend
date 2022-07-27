export const addMinutes = (numOfMinutes: number, date = new Date()) => {
  date.setTime(date.getTime() + numOfMinutes * 60 * 1000);
  return date;
};

export const iqomah = (time: string) => {
  const date = new Date(`2000-03-04T${time}:00.000`);
  const add15min = addMinutes(15, date);
  const hour = add15min.getHours();
  const min = add15min.getMinutes();
  const padMin = min.toString().padStart(2, "0");
  const formatedTime = `${hour}:${padMin}`;
  const padTime = formatedTime.padStart(5, "0");
  return padTime;
};
