import Link from 'next/link';
import {
  useSortableData,
  getClassNamesFor,
} from '../../../components/TableSorter/TableSorter';

const NotStartedTable = (props: any) => {
  const orders = props.orders;
  const tasks = props.tasks;
  const brands = props.brands;

  const { items, requestSort, sortConfig } = useSortableData(orders);

  return (
    <table className="min-w-max w-full table-auto">
      <thead>
        <tr className="bg-yellow-300 text-gray-600 uppercase text-sm leading-normal">
          <th className="py-3 px-6 text-left">
            <button
              type="button"
              id="sortButton"
              onClick={() => requestSort('date_accepted')}
              className={getClassNamesFor(
                'date_accepted',
                sortConfig
              )}
            >
              Date Accepted
            </button>
          </th>
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
              id="sortButton"
              onClick={() => requestSort('brand_id')}
              className={getClassNamesFor('brand_id', sortConfig)}
            >
              Brand (Actual)
            </button>
          </th>
          <th className="py-3 px-6 text-left">
            <button
              type="button"
              id="sortButton"
              onClick={() => requestSort('target_time')}
              className={getClassNamesFor('target_time', sortConfig)}
            >
              Target Time
            </button>
          </th>
          <th className="py-3 px-6 text-center">Start Order</th>
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
                        {order.date_accepted
                          ? order.date_accepted
                          : 'null'}
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
                      {
                        tasks.find(
                          (task: any) =>
                            task.id === order.work_task_id
                        )?.name
                      }
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
                          brands.find(
                            (b: any) => b.id === order.brand_id
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
                  <td>
                    <div className="flex justify-center">
                      <Link href={`/start_wo/${order.id}`}>
                        <button className=" bg-blue-600 w-full rounded-md text-white outline-none focus:ring-4 shadow-lg">
                          {'Start'}
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
export default NotStartedTable;
