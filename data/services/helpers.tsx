export const goBackXDaysCalendarFormat = (days: number) => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - days);
  return yesterday.toISOString().split('T')[0];
};

export const throwZendeskDBUpdateError = (errorObj: any) => {
  alert('Database update failed - please try again');
  console.log(errorObj.message);
  throw new Error('Order Update error');
};
