export const InitialClientDetails = (props: any) => {
  const { workOrder, tasks, specificFields } = props;
  return (
    <>
      {workOrder && specificFields && tasks && (
        <>
          <h2 className="mt-3">Initial Client Details</h2>
          <p>
            Work Order Task:{' '}
            {
              tasks.find(
                (task: any) => task.id == workOrder.work_task_id
              )?.name
            }
          </p>
          <ul>
            <li>
              Initial Units/Quantity:{' '}
              {workOrder.initial_units_or_quantity}
            </li>
            <li>Customer Description: {workOrder.description}</li>
          </ul>
        </>
      )}
    </>
  );
};
