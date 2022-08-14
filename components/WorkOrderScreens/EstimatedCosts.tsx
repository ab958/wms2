import { useEffect, useState } from 'react';
import { ActionWO } from './AcceptorReject/ActionWO';

export const EstimatedCosts = (props: any) => {
  const { tasks, order, brands } = props;

  const [targetTime, setTargetTime] = useState(0);
  const [cost, setCost] = useState(0);
  const [brandId, setBrandId] = useState('');

  useEffect(() => {
    const task = tasks.find(
      (task: any) => task.id === order.work_task_id
    );

    if (brandId) {
      const brand = brands.find((b: any) => b.id == brandId);
      if (!task.mins_per_unit && !task.flat_cost) {
        setCost(0);
      } else if (!task.mins_per_unit && task.flat_cost) {
        const flatCostTimeMins = Number(
          (order.initial_units_or_quantity * task.flat_cost).toFixed(
            2
          )
        );
        setCost(flatCostTimeMins);
      } else {
        const flatCostTimeMins = Number(
          (
            order.initial_units_or_quantity *
            task.mins_per_unit *
            (brand.hourly_rate / 60)
          ).toFixed(2)
        );
        setCost(flatCostTimeMins);
      }
    }

    if (order && tasks) {
      if (task && task.name) {
        if (!task.mins_per_unit) {
          setTargetTime(0);
        }
        const taskTimeMins = task.mins_per_unit;
        const tempTargetTime =
          order.initial_units_or_quantity * taskTimeMins;
        setTargetTime(tempTargetTime);
      }
    }
  }, [order, tasks, brandId]);

  const handleBrandSelect = (brandId: string) => {
    setBrandId(brandId);
  };

  return (
    <>
      {tasks && order && brands && (
        <>
          <h2>Calculate Estimated Costs</h2>
          <ul>
            <li> --- </li>
            <li>
              <b>Task: </b>
              {
                tasks.find(
                  (task: any) => task.id === order.work_task_id
                )?.name
              }
            </li>
            <li>
              <b>Total Units/Quantity: </b>
              {order.initial_units_or_quantity}
            </li>
            <li>
              <b>Customer's Brand Entry: </b>
              {order.brand_entry}
            </li>
          </ul>
          <label htmlFor="brand_system">
            <h3 className="mt-3">
              {' '}
              Select the Customer's Brand here to update estimates
              below
            </h3>
          </label>
          <select
            name="brands"
            id="brands"
            onChange={(e) => handleBrandSelect(e.target.value)}
          >
            <option hidden disabled selected>
              Select a Brand
            </option>
            {brands.map((brand: any) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
          <ul>
            <li>
              <b>Target Time (mins): </b> {targetTime} minutes
            </li>
            <li>
              <b>Estimated Costs (£): </b> £{cost}
            </li>
          </ul>
          <ActionWO targetTime={targetTime} estCost={cost} />
        </>
      )}
    </>
  );
};
