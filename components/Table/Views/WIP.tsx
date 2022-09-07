import Link from 'next/link';
import {
  useSortableData,
  getClassNamesFor,
} from '../../../components/TableSorter/TableSorter';

const WIPTable = (props: any) => {
  const orders = props.orders;
  const tasks = props.tasks;
  const workers = props.workers;
  const brands = props.brands;

  const { items, requestSort, sortConfig } = useSortableData(orders);

  return (
    <table className="min-w-max w-full table-auto">
      <thead>
        <tr className="bg-blue-200 text-gray-600 uppercase text-sm leading-normal">
          <th className="py-3 px-6 text-left">
            <button
              type="button"
              onClick={() => requestSort('start_time')}
              className={getClassNamesFor('start_time', sortConfig)}
            >
              Date Started
            </button>
          </th>
          <th className="py-3 px-6 text-left">
            <button
              type="button"
              onClick={() => requestSort('expected_finish_date')}
              className={getClassNamesFor(
                'expected_finish_date',
                sortConfig
              )}
            >
              Expected Finish Date
            </button>
          </th>
          <th className="py-3 px-6 text-left">
            <button
              type="button"
              onClick={() => requestSort('tracking_id')}
              className={getClassNamesFor('tracking_id', sortConfig)}
            >
              ID
            </button>
          </th>
          <th className="py-3 px-6 text-left">
            <button
              type="button"
              onClick={() => requestSort('work_task_id')}
              className={getClassNamesFor('work_task_id', sortConfig)}
            >
              Work Task
            </button>
          </th>
          <th className="py-3 px-6 text-left">
            <button
              type="button"
              onClick={() => requestSort('initial_units_or_quantity')}
              className={getClassNamesFor(
                'initial_units_or_quantity',
                sortConfig
              )}
            >
              Units / Quantity
            </button>
          </th>
          <th className="py-3 px-6 text-left">
            <button
              type="button"
              onClick={() => requestSort('worker_id')}
              className={getClassNamesFor('worker_id', sortConfig)}
            >
              Assigned To
            </button>
          </th>
          <th className="py-3 px-6 text-left">
            <button
              type="button"
              onClick={() => requestSort('target_time')}
              className={getClassNamesFor('target_time', sortConfig)}
            >
              Target Time
            </button>
          </th>
          <th className="py-3 px-6 text-left">
            <button
              type="button"
              onClick={() => requestSort('brand_id')}
              className={getClassNamesFor('brand_id', sortConfig)}
            >
              Brand (Actual)
            </button>
          </th>
          <th className="py-3 px-6 text-center">Complete Order</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 text-sm font-light">
        {items
          ? items.map((order: any) => {
              return (
                <tr
                  key={order.tracking_id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <span>
                        {order.start_time
                          ? (order.start_time as any).slice(0, 10)
                          : null}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <span>
                        {order.expected_finish_date
                          ? (order.expected_finish_date as any)
                              .slice(0, 19)
                              .replace(/T/g, ' ')
                          : null}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="font-medium">
                        {order.tracking_id}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex items-center justify-center">
                      <span>
                        {
                          tasks.find(
                            (task: any) =>
                              task.id === order.work_task_id
                          )?.name
                        }
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <span className="font-medium">
                      {order.initial_units_or_quantity}
                    </span>
                  </td>

                  <td className="py-3 px-6 text-center">
                    <div className="flex items-center justify-center">
                      <span>
                        {
                          workers.find(
                            (worker: any) =>
                              worker.id === order.worker_id
                          )?.name
                        }
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex items-center justify-center">
                      <span>{order.target_time} minutes</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex items-center justify-center">
                      <span>
                        {
                          brands.find(
                            (brand: any) =>
                              brand.id === order.brand_id
                          )?.name
                        }
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <Link href={`/finish/${order.id}`}>
                        <button className=" bg-blue-600 w-full rounded-md text-white outline-none focus:ring-4 shadow-lg">
                          {'Finish'}
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
export default WIPTable;
