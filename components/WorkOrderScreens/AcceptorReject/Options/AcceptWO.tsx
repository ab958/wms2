export const AcceptWO = ({
  // estCost,
  targetTime,
}: {
  // estCost: number;
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
      <p>Any notes to accepting a work order?</p>
      <textarea
        id="initialComments"
        placeholder="Add notes to share with the customer here..."
      ></textarea>
      <button id="submitAccept">Accept Work Order</button>
    </>
  );
};
