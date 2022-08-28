export const CompletedSummary = (props: any) => {
  const { workOrder, tasks, brands } = props;
  return (
    <>
      {workOrder && tasks && brands && (
        <>
          <h1>Completed Order: #{workOrder.tracking_id}</h1>
          <p className="mb-3">
            <b>Work Order Task: </b>
            {
              tasks.find(
                (task: any) => task.id == workOrder.work_task_id
              )?.name
            }
          </p>
          <p>
            Brand:{' '}
            {
              brands.find(
                (brand: any) => brand.id == workOrder.brand_id
              )?.name
            }
          </p>
          <p>Customer Name: {workOrder.name}</p>
          <ul>
            <li>Email: {workOrder.email}</li>
            <li>Number: {workOrder.number}</li>
          </ul>

          <ul>
            <li> --- </li>
            <li>
              Total Units/Quantity:{' '}
              {workOrder.final_units_or_quantity}
            </li>
            <li>Initial Price: £{workOrder.initial_cost}</li>
            <li>Final Price: £{workOrder.final_price}</li>
            <li>Date Accepted: {workOrder.date_accepted}</li>
            <li>Finish Date: {workOrder.finish_date}</li>
            <li>Time Taken: {workOrder.minutes_taken} mins</li>
            <li>Customer Description: {workOrder.description}</li>
          </ul>
        </>
      )}
    </>
  );
};
