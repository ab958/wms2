export const PricingSummary = (props: any) => {
  return (
    <>
      <h2>Final Pricing</h2>
      <p>
        <b>Total Units / Quantity: </b>
        {props.workOrder.initial_units_or_quantity}
      </p>

      <label className="mt-3" htmlFor="finalPrice">
        <h2>Final Price (£)</h2>
      </label>
      <input
        type="number"
        placeholder={props.workOrder.final_price}
        id="finalPrice"
        step=".01"
        required
      />
      <label className="mt-3" htmlFor="finalUnits">
        <h2>Final Units / Quantity</h2>
      </label>
      <input
        type="number"
        placeholder={props.workOrder.initial_units_or_quantity}
        id="finalUnits"
        required
      />
    </>
  );
};
