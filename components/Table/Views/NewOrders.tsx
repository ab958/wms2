import Link from 'next/link';
import {
  useSortableData,
  getClassNamesFor,
} from '../../../components/TableSorter/TableSorter';

const NewOrderTable = (props: any) => {
  const orders = props.orders;
  const tasks = props.tasks;

  const { items, requestSort, sortConfig } = useSortableData(orders);

  return (
    <table className="min-w-max w-full table-auto">
      <thead>
        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
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
              onClick={() => requestSort('created_at')}
              className={getClassNamesFor('created_at', sortConfig)}
            >
              Submission Date
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
              onClick={() => requestSort('brand_entry')}
              className={getClassNamesFor('brand_entry', sortConfig)}
            >
              Brand (Customer Entry)
            </button>
          </th>
          <th className="py-3 px-6 text-center">Approve or Deny</th>
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
                        {order.created_at
                          ? String(
                              order.created_at
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
                          tasks.find(
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
                        {order.initial_units_or_quantity}
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
                  <td>
                    <div className="flex justify-center">
                      <Link href={`/wo_pending/${order.id}`}>
                        <button className=" bg-blue-600 w-full rounded-md text-white outline-none focus:ring-4 shadow-lg">
                          {'Action'}
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
export default NewOrderTable;
