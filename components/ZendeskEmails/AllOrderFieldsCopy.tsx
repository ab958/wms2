import {
  getBrandName,
  getWorkTaskName,
} from '../../data/services/helpers';

export const AllOrderFieldsCopy = (
  order: any,
  workTasks: any,
  brands: any
) => {
  const brandName = getBrandName(brands, order.brand_id);
  const workTaskName: string = getWorkTaskName(
    workTasks,
    order.work_task_id
  );
  console.log(order.qc_pics);
  return `Hey!\n\n
  Great news - your Work Order has been completed! You can see a summary of the work done below.\n\n
  If you have any questions, we’re always here!\n\n
  Tu Pack\n
  ${order.name ? `Your Name: ${order.name} \n` : '-'}
  ${
    order.brand_entry
      ? `Your Brand Entry: ${order.brand_entry} \n`
      : '-'
  }
  ${order.brand_id ? `Actual Brand: ${brandName} \n` : '-'}
  ${order.work_task_id ? `Work Task: ${workTaskName} \n` : '-'}
  ${
    order.description
      ? `Your Work Order Description: ${order.description} \n`
      : '-'
  }
          ${
            order.initial_units_or_quantity
              ? `Initial Units / Qty: ${order.initial_units_or_quantity} \n`
              : '-'
          }
          ${
            order.final_units_or_quantity
              ? `Final Units / Qty: ${order.final_units_or_quantity} \n`
              : '-'
          }
          ${
            order.decline_reason
              ? `Decline Reason: ${order.decline_reason} \n`
              : '-'
          }
          ${
            order.minutes_taken
              ? `Time Taken: ${order.minutes_taken} mins \n`
              : '-'
          }
          ${
            order.initial_cost
              ? `Estimated Cost: £${order.initial_cost} \n`
              : '-'
          }
          ${
            order.final_price
              ? `Final Cost: £${order.final_price} \n`
              : '-'
          }
          ${
            order.final_comments
              ? `Warehouse Final Comments: ${order.final_comments} \n`
              : '-'
          }
          ${
            order.qc_pics
              ? `Quality Control Pics: ${order.qc_pics} \n`
              : '-'
          }
          ${
            order.expected_finish_date
              ? `Expected Finish Date: ${order.expected_finish_date} \n`
              : '-'
          }
          ${
            order.finish_date
              ? `Actual Finish Date: ${order.finish_date} \n`
              : '-'
          }
          \n
          More Order Details \n
          ${order.name ? `Your Name: ${order.name} \n` : '-'}
          ${order.number ? `Your Name: ${order.number} \n` : '-'}
          ${
            order.date_accepted
              ? `Date Accepted: ${order.date_accepted} \n`
              : '-'
          }
          ${
            order.worker_id
              ? `Worker Name (TBCC): ${order.worker_id} \n`
              : '-'
          }
          ${
            order.start_time
              ? `Start Time: ${order.start_time} \n`
              : '-'
          }
          ${
            order.expected_finish_date
              ? `Expected Finish Date: ${order.expected_finish_date} \n`
              : '-'
          }
          ${
            order.target_time
              ? `  Target Time: ${order.target_time} \n`
              : '-'
          }
          ${
            order.initial_comments
              ? `Initial Comments from Warehouse: ${order.initial_comments} \n`
              : '-'
          }
          \n
             `;
};
