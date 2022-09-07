export const QueueSummary = (props: any) => {
  const { workOrder, tasks } = props;
  return (
    <>
      {workOrder && tasks && (
        <>
          <h1>Queue - Order: #{workOrder.tracking_id}</h1>
          <p>
            <b>Work Order Task: </b>
            {
              tasks.find(
                (task: any) => task.id == workOrder.work_task_id
              )?.name
            }
          </p>

          <ul>
            <li> --- </li>
            <li>
              Total Units/Quantity:{' '}
              {workOrder.initial_units_or_quantity}
            </li>
            <li>Target Time: {workOrder.target_time}mins</li>
            <li>Date Accepted: {workOrder.date_accepted}</li>
            <li>Description: {workOrder.description}</li>
          </ul>
        </>
      )}
    </>
  );
};
