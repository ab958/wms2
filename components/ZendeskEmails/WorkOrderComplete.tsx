import { AllOrderFieldsCopy } from './AllOrderFieldsCopy';
import { SpecificFieldsCopy } from './SpecificFieldsCopy';

export const workOrderCompleteCopy = (
  order: any,
  specificFields: any,
  tasks: any,
  brands: any
) => {
  const orderCopy: string = AllOrderFieldsCopy(order, tasks, brands);
  const specificFieldsCopy: string =
    SpecificFieldsCopy(specificFields);

  return (
    `Hey!\n\n
  Great news - your Work Order has been completed! You can see a summary of the work done below.\n\n
  If you have any questions, we’re always here!\n\n
  Tu Pack\n
  ${
    order.final_units_or_quantity
      ? `Final Units / Qty: ${order.final_units_or_quantity} \n`
      : ''
  }
          ${
            order.initial_units_or_quantity
              ? `Initial Units / Qty: ${order.initial_units_or_quantity} \n`
              : ''
          }
          ${
            order.minutes_taken
              ? `Time Taken: ${order.minutes_taken} mins \n`
              : ''
          }
          ${
            order.final_price
              ? `Final Cost: £${order.final_price} \n`
              : ''
          }
          ${
            order.final_comments
              ? `Warehouse Final Comments: ${order.final_comments} \n`
              : ''
          }
          ${
            order.qc_pics
              ? `Quality Control Pictures: ${order.qc_pics[0]} \n`
              : ''
          }
          ${
            order.finish_date
              ? `Actual Finish Date: ${order.finish_date} \n`
              : ''
          }
          ${
            order.expected_finish_date
              ? `Expected Finish Date: ${order.expected_finish_date} \n`
              : ''
          }
             ` +
    `${orderCopy}` +
    `${specificFieldsCopy}`
  );
};
