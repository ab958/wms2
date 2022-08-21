export const goBackXDaysCalendarFormat = (days: number) => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - days);
  return yesterday.toISOString().split('T')[0];
};

export const throwDBUpdateError = (errorObj: any) => {
  alert('Database update failed - please try again');
  console.log(errorObj.message);
  throw new Error('Order Update error');
};

export const getBrandName = (brands: any, brandID: number) => {
  const brand = brands.find((brand: any) => brand.id == brandID);
  return brand ? brand.name : 99;
};

export const getWorkTaskName = (
  workTasks: any,
  workTaskID: number
) => {
  const workTask = workTasks.find(
    (workTask: any) => workTask.id == workTaskID
  );
  return workTask ? workTask.name : 99;
};
