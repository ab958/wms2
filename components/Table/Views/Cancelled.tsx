import Link from 'next/link';
import {
  useSortableData,
  getClassNamesFor,
} from '../../../components/TableSorter/TableSorter';

const CancelledTable = (props: any) => {
  const orders = props.orders;
  const workTasks = props.workTasks;

  const { items, requestSort, sortConfig } = useSortableData(orders);
  return (
    <table className="min-w-max w-full table-auto">
      <thead>
        <tr
          key={orders.tracking_id}
          className="bg-red-200 text-gray-600 uppercase text-sm leading-normal"
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
              Start Date
            </button>
          </th>
          <th className="py-3 px-6 text-left">
            <button
              type="button"
              id="sortButton"
              onClick={() => requestSort('brand_entry')}
              className={getClassNamesFor('brand_entry', sortConfig)}
            >
              Brand Entry
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
              onClick={() => requestSort('decline_reason')}
              className={getClassNamesFor(
                'decline_reason',
                sortConfig
              )}
            >
              Decline Reason
            </button>
          </th>
          <th className="py-3 px-6 text-left">See All</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 text-sm font-light">
        {orders
          ? items.map((order: any) => {
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
                        {order.start_time
                          ? String(
                              order.start_time
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
                        {order.brand_entry}
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
                        {order.decline_reason}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <Link href={`/cancelled/${order.id}`}>
                        <button className=" bg-blue-600 w-full rounded-md text-white outline-none focus:ring-4 shadow-lg">
                          {'All Details'}
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })
          : null}
      </tbody>
    </table>
  );
};
export default CancelledTable;
