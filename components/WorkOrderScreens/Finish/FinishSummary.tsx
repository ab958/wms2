export const FinishSummary = (props: any) => {
  const { workOrder, tasks } = props;

  return (
    <>
      {workOrder && tasks && (
        <>
          <h1>Finish Order: #{workOrder.tracking_id}</h1>
          <p className="mb-1">
            <b>Work Task: {''}</b>
            {
              tasks.find(
                (task: any) => task.id == workOrder.work_task_id
              )?.name
            }
          </p>
          <p className="mb-4">
            Total Units / Quantity:{' '}
            {workOrder.initial_units_or_quantity}
          </p>
        </>
      )}
    </>
  );
};
