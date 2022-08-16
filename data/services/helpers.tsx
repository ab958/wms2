export const goBackXDaysCalendarFormat = (days: number) => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - days);
  return yesterday.toISOString().split('T')[0];
};
