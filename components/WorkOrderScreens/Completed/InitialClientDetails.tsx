export const InitialClientDetails = (props: any) => {
  const { workOrder, tasks, specificFields } = props;
  return (
    <>
      {workOrder && specificFields && tasks && (
        <>
          <h2>Initial Client Details</h2>
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
            <li>
              Initial Units/Quantity:
              {workOrder.initial_units_or_quantity}
            </li>
            <li>Initial Price: £{workOrder.initial_cost}</li>
            <li>Customer Description: {workOrder.description}</li>
          </ul>
        </>
      )}
    </>
  );
};
