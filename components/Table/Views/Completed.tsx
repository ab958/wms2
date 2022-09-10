import Link from 'next/link';
import {
  useSortableData,
  getClassNamesFor,
} from '../../../components/TableSorter/TableSorter';

const CompletedTable = (props: any) => {
  const orders = props.orders;
  const workTasks = props.workTasks;
  const brands = props.brands;

  const { items, requestSort, sortConfig } = useSortableData(orders);

  return (
    <table className="min-w-max w-full table-auto">
      <thead>
        <tr
          key={orders.tracking_id}
          className="bg-green-200 text-gray-600 uppercase text-sm leading-normal"
        >
          <th className="py-3 px-6 text-left">
            <button
              type="button"
              id="sortButton"
              onClick={() => requestSort('tracking_id')}
              className={getClassNamesFor('tracking_id', sortConfig)}
            >
              ID
            </button>
          </th>
          <th className="py-3 px-6 text-left">
            <button
              type="button"
              id="sortButton"
              onClick={() => requestSort('start_time')}
              className={getClassNamesFor('start_time', sortConfig)}
            >
              Finish Date
            </button>
          </th>
          <th className="py-3 px-6 text-left">
            <button
              type="button"
              id="sortButton"
              onClick={() => requestSort('work_task_id')}
              className={getClassNamesFor('work_task_id', sortConfig)}
            >
              Work Task
            </button>
          </th>
          <th className="py-3 px-6 text-left">
            <button
              type="button"
              id="sortButton"
              onClick={() => requestSort('brand_id')}
              className={getClassNamesFor('brand_id', sortConfig)}
            >
              Brand
            </button>
          </th>
          <th className="py-3 px-6 text-left">
            <button
              type="button"
              id="sortButton"
              onClick={() => requestSort('final_units_or_quantity')}
              className={getClassNamesFor(
                'final_units_or_quantity',
                sortConfig
              )}
            >
              Final Units / Quantity
            </button>
          </th>
          <th className="py-3 px-6 text-left">
            <button
              type="button"
              id="sortButton"
              onClick={() => requestSort('minutes_taken')}
              className={getClassNamesFor(
                'minutes_taken',
                sortConfig
              )}
            >
              Time Taken
            </button>
          </th>
          {/* <th className="py-3 px-6 text-center">Receipt Link</th> */}
          <th className="py-3 px-6 text-center">See All Details</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 text-sm font-light">
        {orders ? (
          items.map((order: any) => {
            return (
              <tr
                key={order.tracking_id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-center">
                  <div className="flex align-center items-center">
                    <span className="text-center">
                      {order.tracking_id}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex align-center items-center">
                    <span className="text-center">
                      {order.finish_date
                        ? String(
                            order.finish_date
                              .slice(0, 19)
                              .replace(/T/g, ' ')
                          )
                        : null}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex align-center items-center">
                    <span className="text-center">
                      {
                        workTasks.find(
                          (task: any) =>
                            task.id === order.work_task_id
                        )?.name
                      }
                    </span>
                  </div>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex align-center items-center">
                    <span className="text-center">
                      {
                        brands.find(
                          (brand: any) => brand.id === order.brand_id
                        )?.name
                      }
                    </span>
                  </div>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex align-center items-center">
                    <span className="text-center">{`${order.final_units_or_quantity}`}</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex align-center items-center">
                    <span className="text-center">{`${order.minutes_taken} mins`}</span>
                  </div>
                </td>

                {/* <td>
                  <div className="flex justify-center bg-blue-600 rounded-md ">
                    <PDFDownloadLink
                      document={
                        <Receipt
                          order={order}
                          brand={brands.find(
                            (x: any) => x.id === order.brand_id
                          )}
                          task={workTasks.find(
                            (x: any) => x.id == order.work_task_id
                          )}
                        />
                      }
                      fileName="recipt"
                      className="px-3 py-1 w-full text-center font-bold bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform"
                    >
                      Get Receipt
                    </PDFDownloadLink>
                  </div>
                </td> */}
                <td>
                  <div className="flex justify-center">
                    <Link href={`/completed/${order.id}`}>
                      <button className=" bg-blue-600 w-full rounded-md text-white outline-none focus:ring-4 shadow-lg">
                        {'All Details'}
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </tbody>
    </table>
  );
};

export default CompletedTable;
