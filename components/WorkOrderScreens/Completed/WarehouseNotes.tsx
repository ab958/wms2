import Link from 'next/link';

export const WarehouseSummary = (props: any) => {
  const { workOrder } = props;
  return (
    <>
      {workOrder && (
        <>
          <h1 className="mt-3">Warehouse Notes</h1>

          <p>Warehouse Final Comments: {workOrder.final_comments}</p>
          {workOrder.qc_pics ? (
            <h3>Warehouse Quality Control Pics</h3>
          ) : null}
          {workOrder.qc_pics ? (
            <ul>
              {workOrder.qc_pics.map((url: any, index: any) => (
                <li>
                  Image {index + 1} - <Link href={url}>Link</Link>
                </li>
              ))}
            </ul>
          ) : null}
        </>
      )}
    </>
  );
};
