import {
  getBrandName,
  getWorkTaskName,
} from '../../data/services/helpers';

export const rejectedCopy = (
  declineReason: string,
  order: any,
  tasks: any,
  brands: any,
  specificFields: any
) => {
  const workTaskName: string = getWorkTaskName(
    tasks,
    order.work_task_id
  );
  const brandName: string = getBrandName(brands, order.brand_id);

  return `We are sorry to inform you that your work order has not been completed.\n
          ${
            declineReason
              ? `Decline reason: ${declineReason} \n`
              : '-'
          }
          \n
          Initial Details \n
          ${workTaskName ? `Work Task: ${workTaskName} \n` : '-'}
          ${order.name ? `Your Name: ${order.name} \n` : '-'}
          ${
            order.brand_entry
              ? `Your Brand Entry: ${order.brand_entry} \n`
              : '-'
          }
          ${brandName ? `Actual Brand: ${brandName} \n` : '-'}
          ${
            order.initial_units_or_quantity
              ? `Units / Qty: ${order.initial_units_or_quantity} \n`
              : '-'
          }
          ${
            order.initial_cost
              ? `Estimated Cost: £${order.initial_cost} \n`
              : '-'
          }
          ${
            order.description
              ? `Your Description: ${order.description} \n`
              : '-'
          }
          \n
          More Order Details \n
          ${
            order.time_accepted
              ? `Date Accepted: ${order.time_accepted} \n`
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
          Work Order Specific Details \n
          ${
            specificFields.approxWeight
              ? `Approx Weight: ${specificFields.approxWeight} \n`
              : '-'
          }
          ${
            specificFields.barcodeRequired
              ? `Barcode Requied: ${specificFields.barcodeRequired} \n`
              : '-'
          }
          ${
            specificFields.collectionAddress
              ? `Collection Address: ${specificFields.collectionAddress} \n`
              : '-'
          }
          ${
            specificFields.courierId
              ? `CourierID: ${specificFields.courierId} \n`
              : '-'
          }
          ${
            specificFields.dateRequired
              ? `Date Required: ${specificFields.dateRequired} \n`
              : '-'
          }
          ${
            specificFields.deliveryAddress
              ? `Delivery Address: ${specificFields.deliveryAddress} \n`
              : '-'
          }
          ${
            specificFields.deliveryType
              ? `Delivery Type: ${specificFields.deliveryType} \n`
              : '-'
          }
          ${
            specificFields.dimensions
              ? `Dimensions: ${specificFields.dimensions} \n`
              : '-'
          }
          ${
            specificFields.finalSKU
              ? `Final SKU: ${specificFields.finalSKU} \n`
              : '-'
          }
          ${
            specificFields.flatOrHanging
              ? `Flat or Hanging: ${specificFields.flatOrHanging} \n`
              : '-'
          }
          ${
            specificFields.garmentSpecifics
              ? `Garment Specifics: ${specificFields.garmentSpecifics} \n`
              : '-'
          }
          ${
            specificFields.handOrPC
              ? `Hand or PC: ${specificFields.handOrPC} \n`
              : '-'
          }
          ${
            specificFields.itemNeedMeasuring
              ? `Item Need Measuring: ${specificFields.itemNeedMeasuring} \n`
              : '-'
          }
          ${
            specificFields.message
              ? `Message: ${specificFields.message} \n`
              : '-'
          }
          ${
            specificFields.orderNumber
              ? `Order Number: ${specificFields.orderNumber} \n`
              : '-'
          }
          ${
            specificFields.packagingInstructions
              ? `Packaging Instructions: ${specificFields.packagingInstructions} \n`
              : '-'
          }
          ${
            specificFields.packingRequirements
              ? `Packaging Requirements: ${specificFields.packingRequirements} \n`
              : '-'
          }
          ${
            specificFields.parcelDimensions
              ? `Parcel Dimensions: ${specificFields.parcelDimensions} \n`
              : '-'
          }
          ${
            specificFields.quantityOfItems
              ? `Quantity: ${specificFields.quantityOfItems} \n`
              : '-'
          }
          ${
            specificFields.reasonForCount
              ? `Reason for count: ${specificFields.reasonForCount} \n`
              : '-'
          }
          ${
            specificFields.decline_reason
              ? `Roll need mesasuring: ${specificFields.rollNeedMeasuring} \n`
              : '-'
          }
          ${
            specificFields.rollSize
              ? `Roll Size: ${specificFields.rollSize} \n`
              : '-'
          }
          ${
            specificFields.skus
              ? `SKUS: ${specificFields.skus} \n`
              : '-'
          }
          ${
            specificFields.threadColour
              ? `Thread Color: ${specificFields.threadColour} \n`
              : '-'
          }
          ${
            specificFields.typeOfInsert
              ? `Type of Insert: ${specificFields.typeOfInsert} \n`
              : '-'
          }
          ${
            specificFields.weight
              ? ` Weight: ${specificFields.weight} \n`
              : '-'
          }
             `;
};
