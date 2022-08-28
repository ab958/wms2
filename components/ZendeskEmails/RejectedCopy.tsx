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
  console.log(
    specificFields.orderNumbers,
    specificFields.pics,
    specificFields.skus
  );

  return `This email is to let you know that we cannot currently complete this Work Order request, we are sorry for any inconvenience that this may cause. 
  You can see the message from the team to explain why below:\n
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
            order.date_accepted
              ? `Date Accepted: ${order.date_accepted} \n`
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
            specificFields.ASNandDate
              ? `ASN & Date: ${specificFields.ASNandDate} \n`
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
            specificFields.courier
              ? `Courier Name: ${specificFields.courier} \n`
              : '-'
          }
          ${
            specificFields.dateRequired
              ? `Date Required: ${specificFields.dateRequired} \n`
              : '-'
          }
          ${
            specificFields.dateTimePreference
              ? `Date & Time Preferred: ${specificFields.dateTimePreference} \n`
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
            specificFields.dispatchDate
              ? `Dispatch Date: ${specificFields.dispatchDate} \n`
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
              ? `Item Need Measuring?: ${specificFields.itemNeedMeasuring} \n`
              : '-'
          }
          ${
            specificFields.message
              ? `Message: ${specificFields.message} \n`
              : '-'
          }
          ${
            specificFields.orderNumbers
              ? `Order Numbers: ${specificFields.orderNumbers} \n`
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
          // Array
          ${
            specificFields.pics
              ? `Pics: ${specificFields.pics} \n`
              : '-'
          }
          ${
            specificFields.prodNeedMintsoft
              ? `Product need Mintsoft?: ${specificFields.prodNeedMintsoft} \n`
              : '-'
          }
          ${
            specificFields.quantityOfItems
              ? `Quantity: ${specificFields.quantityOfItems} \n`
              : '-'
          }
          ${
            specificFields.reasonForCount
              ? `Reason for count?: ${specificFields.reasonForCount} \n`
              : '-'
          }
          ${
            specificFields.rollNeedMeasuring
              ? `Roll need measuring?: ${specificFields.rollNeedMeasuring} \n`
              : '-'
          }
          ${
            specificFields.rollSize
              ? `Roll Size: ${specificFields.rollSize} \n`
              : '-'
          }
          // Array
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
            specificFields.timeFrame
              ? `Time Frame: ${specificFields.timeFrame} \n`
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
