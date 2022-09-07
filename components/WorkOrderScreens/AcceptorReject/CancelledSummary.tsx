import Title from '../../Title';

export const CancelledSummary = (props: any) => {
  const { workOrder, tasks } = props;
  return (
    <>
      {workOrder && tasks && (
        <>
          <Title
            text={`Cancelled Order: #${workOrder.tracking_id}`}
          />
          <p>
            Work Order Task:
            {
              'TBCCC'
              // tasks.find(
              //   (task: any) => task.id == workOrder.work_task_id
              // )?.name
            }
          </p>

          <ul>
            <li> --- </li>
            <li>
              Initial Units/Quantity:
              {workOrder.initial_units_or_quantity}
            </li>
            <li>
              Brand (Customer Entry):
              {workOrder.brand_entry}
            </li>
            <li>
              Decline Reason:
              {workOrder.decline_reason ? (
                <p>{workOrder.decline_reason}</p>
              ) : (
                'No reason provided'
              )}
            </li>
            <li>
              Initial Units/Quantity:
              {workOrder.initial_units_or_quantity}
            </li>
            {!workOrder.target_time ? null : (
              <li>Target Time: {workOrder.target_time}</li>
            )}
            {!workOrder.date_accepted ? null : (
              <li>Date Accepted: {workOrder.date_accepted}</li>
            )}
            <li>
              Description:
              {workOrder.description}
            </li>
          </ul>
        </>
      )}
    </>
  );
};
