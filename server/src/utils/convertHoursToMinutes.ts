export default function convertHourToMinutes(time: string) {
  // 8:00

  const [hour, minutes] = time.split(':').map(Number);
  // O mesmo que isso:
  // const [hour, minutes] = time.split(':').map(time => Number(time));

  const timeInMinutes = (hour * 60) + minutes;

  return timeInMinutes
}