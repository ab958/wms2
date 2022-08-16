export const StartChoices = (props: any) => {
  const { workers } = props;

  return (
    <>
      {props && workers && (
        <>
          <h1>Complete this to start</h1>

          <label htmlFor="startDate">Start Date:</label>
          <input type="date" id="startDate" />

          <label htmlFor="assignWorker">Assigned Worker:</label>
          <select id="assignWorker">
            <option hidden disabled selected>
              Select a Worker
            </option>
            {workers.map(({ name, id }: any) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>

          <label htmlFor="startDate">Expected Finish Date:</label>
          <input type="date" id="estFinishDate" />
        </>
      )}
    </>
  );
};
