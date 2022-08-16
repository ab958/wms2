export const AcceptWO = ({
  estCost,
  targetTime,
}: {
  estCost: number;
  targetTime: number;
}) => {
  return (
    <>
      <label htmlFor="updateTiming">
        <p className="mt-3">Confirm Target Time (mins)</p>
      </label>
      <input
        placeholder={String(targetTime)}
        type="number"
        id="updateTime"
        required
      ></input>

      <label htmlFor="updateCosts">
        <p>Confirm Estimated Cost (£)</p>
      </label>
      <input
        placeholder={String(estCost)}
        type="number"
        id="updateCost"
        step=".01"
        required
      ></input>
      <p className="mt-3"></p>

      <p>Any notes to accepting a work order?</p>
      <textarea
        id="initialComments"
        placeholder="Add notes to share with the customer here..."
      ></textarea>
      <button id="submitAccept">Accept Work Order</button>
    </>
  );
};
