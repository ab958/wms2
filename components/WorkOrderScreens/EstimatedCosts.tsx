import { useEffect, useState } from 'react';

export const EstimatedCosts = (props: any) => {
  const [targetTime, setTargetTime] = useState(0);
  const [brand, setBrand] = useState(null);

  console.log(props.brands);

  console.log(props.task);
  const task = props.task;
  const workOrder = props.workOrder;

  useEffect(() => {
    const targetTime =
      workOrder.initial_units_or_quantity * task.mins_per_unit;
    console.log(targetTime);
    setTargetTime(targetTime);
  }, []);

  return (
    <>
      <h2>Calculate Estimated Costs</h2>
      <ul>
        <li> --- </li>
        <li>
          <b>Work Order: </b>
          {task.work_order_name}
        </li>
        <li>
          <b>Total Units/Quantity: </b>
          {workOrder.initial_units_or_quantity}
        </li>
        <li>
          <b>Customer's Brand Entry: </b>
          {workOrder.brand_entry}
        </li>
      </ul>
      <label htmlFor="brand_system">
        <h3 className="mt-3">
          {' '}
          Match the Customer's Brand here to display costs
        </h3>
      </label>
      <select
        name="brands"
        id="brands"
        // onChange={(e) => setBrand(e)}
      >
        <option hidden disabled selected>
          Select a Brand
        </option>
        {/* {props.brands
          .sort(function (a, b) {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          })
          .map(({ name, id }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))} */}
      </select>
      <ul>
        <li>
          <b>Target Time: </b> {targetTime}
        </li>
        <li>
          <b>Estimated Costs: </b> £15
        </li>
      </ul>
    </>
  );
};
