export const formatTime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
};

export const roundToFifteenMinutes = (date: Date): Date => {
  const minutes = date.getMinutes();
  const roundedMinutes = Math.round(minutes / 15) * 15;
  const newDate = new Date(date);
  newDate.setMinutes(roundedMinutes);
  return newDate;
};

export const calculateTotalProjectTime = (timeBlocks: TimeBlock[]): number => {
  return timeBlocks.reduce((total, block) => total + block.duration, 0);
}; 