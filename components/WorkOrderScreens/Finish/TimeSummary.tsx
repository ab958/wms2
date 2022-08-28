import { goBackXDaysCalendarFormat } from '../../../data/services/helpers';

export const TimeSummary = (props: any) => {
  const { workOrder } = props;

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
      <label htmlFor="finishDate">Actual Finish Date</label>
      <input
        type="date"
        min={goBackXDaysCalendarFormat(5)}
        id="finishDate"
        required
      />

      <label htmlFor="timeTaken">Total Time Taken (mins) </label>
      <input
        type="number"
        placeholder={workOrder.target_time}
        id="timeTaken"
        required
      />
    </>
  );
};
