export const TimeSummary = (props: any) => {
  const { workOrder } = props;
  console.log(props);

  return (
    <>
      <h2>Final Timings</h2>
      <p>
        <b>Start Date: </b>
        {workOrder.start_time}
      </p>
      <p>
        <b>Expected Finish Date: </b>
        {workOrder.expected_finish_date}
      </p>
      <p className="mt-3">
        <b>Target Time: </b> {workOrder.target_time} mins
      </p>
      <label htmlFor="finishTime">Actual Finish Date</label>
      <input type="date" id="finishTime" />

      <label htmlFor="timeTaken">Total Time Taken </label>
      <input
        type="text"
        value={`${workOrder.target_time} mins`}
        id="timeTaken"
      />
    </>
  );
};
