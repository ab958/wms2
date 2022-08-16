export const WOSummary = (props: any) => {
  const { tasks, order } = props;

  return (
    <>
      {tasks && order && (
        <>
          <h1 className="mb-5">
            {order.tracking_id}: Accept / Reject Work Order
          </h1>
          <h2> Summary</h2>
          <ul className="mb-3">
            <li> --- </li>
            <li>
              <b>Task: </b>{' '}
              {
                tasks.find(
                  (task: any) => task.id === order.work_task_id
                )?.name
              }
            </li>
            <li>
              <b>Description: </b>
              {order.description}
            </li>
            <li>
              <b>Total Units/Quantity: </b>
              {order.initial_units_or_quantity}
            </li>
            <li>
              <b>Date Submitted: </b>
              {props && order && order.created_at
                ? order.created_at.slice(0, 10)
                : ''}
            </li>
          </ul>
          <h2>Contact</h2>
          <ul className="mb-3">
            <li> --- </li>
            <li>
              <b>Brand (Customer Entry): </b>
              {order.brand_entry}
            </li>
            <li>
              <b>Customer Name: </b>
              {order.name}
            </li>
            <li>
              <b>Email: </b>
              {order.email}
            </li>
            <li>
              <b>Phone Number: </b>
              {order.number}
            </li>
          </ul>
        </>
      )}
    </>
  );
};
