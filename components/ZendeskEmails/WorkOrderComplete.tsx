export const workOrderCompleteCopy = (
  order: any,
  specificFields: any
) => {
  return `Your work order has now been completed.\n
          Order Complete Summary \n
          ${
            order.work_task_id
              ? `Work Task: ${order.work_task_id} \n`
              : ''
          }
          ${order.name ? `Your Name: ${order.name} \n` : ''}
          ${
            order.brand_entry
              ? `Your Brand Entry: ${order.brand_entry} \n`
              : ''
          }
          ${
            order.brand_id ? `Actual Brand: ${order.brand_id} \n` : ''
          }
          ${
            order.initial_units_or_quantity
              ? `Initial Units / Qty: ${order.initial_units_or_quantity} \n`
              : ''
          }
          ${
            order.final_units_or_quantity
              ? `Final Units / Qty: ${order.final_units_or_quantity} \n`
              : ''
          }
          ${
            order.minutes_taken
              ? `Time Taken: ${order.minutes_taken} mins \n`
              : ''
          }
          ${
            order.initial_cost
              ? `Estimated Cost: £${order.initial_cost} \n`
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
              ? `Quality Control pics links (TBC): ${order.qc_pics[0]} \n`
              : ''
          }
          ${
            order.expected_finish_date
              ? `Expected Finish Date: ${order.expected_finish_date} \n`
              : ''
          }
          ${
            order.finish_time
              ? `Actual Finish Date: ${order.finish_time} \n`
              : ''
          }
          \n
          More Order Details \n
          ${order.name ? `Your Name: ${order.name} \n` : ''}
          ${order.number ? `Your Name: ${order.number} \n` : ''}
          ${
            order.description
              ? `Your Work Order Description: ${order.description} \n`
              : ''
          }
          ${
            order.time_accepted
              ? `Date Accepted: ${order.time_accepted} \n`
              : ''
          }
          ${
            order.worker_id
              ? `Worker Name (TBCC): ${order.worker_id} \n`
              : ''
          }
          ${
            order.start_time
              ? `Start Time: ${order.start_time} \n`
              : ''
          }
          ${
            order.expected_finish_date
              ? `Expected Finish Date: ${order.expected_finish_date} \n`
              : ''
          }
          ${
            order.target_time
              ? `  Target Time: ${order.target_time} \n`
              : ''
          }
          ${
            order.initial_comments
              ? `Initial Comments from Warehouse: ${order.initial_comments} \n`
              : ''
          }
          \n
          Work Order Specific Details \n
          ${
            specificFields.approxWeight
              ? `Approx Weight: ${specificFields.approxWeight} \n`
              : ''
          }
          ${
            specificFields.barcodeRequired
              ? `Barcode Requied: ${specificFields.barcodeRequired} \n`
              : ''
          }
          ${
            specificFields.collectionAddress
              ? `Collection Address: ${specificFields.collectionAddress} \n`
              : ''
          }
          ${
            specificFields.courierId
              ? `CourierID: ${specificFields.courierId} \n`
              : ''
          }
          ${
            specificFields.dateRequired
              ? `Date Required: ${specificFields.dateRequired} \n`
              : ''
          }
          ${
            specificFields.deliveryAddress
              ? `Delivery Address: ${specificFields.deliveryAddress} \n`
              : ''
          }
          ${
            specificFields.deliveryType
              ? `Delivery Type: ${specificFields.deliveryType} \n`
              : ''
          }
          ${
            specificFields.dimensions
              ? `Dimensions: ${specificFields.dimensions} \n`
              : ''
          }
          ${
            specificFields.finalSKU
              ? `Final SKU: ${specificFields.finalSKU} \n`
              : ''
          }
          ${
            specificFields.flatOrHanging
              ? `Flat or Hanging: ${specificFields.flatOrHanging} \n`
              : ''
          }
          ${
            specificFields.garmentSpecifics
              ? `Garment Specifics: ${specificFields.garmentSpecifics} \n`
              : ''
          }
          ${
            specificFields.handOrPC
              ? `Hand or PC: ${specificFields.handOrPC} \n`
              : ''
          }
          ${
            specificFields.itemNeedMeasuring
              ? `Item Need Measuring: ${specificFields.itemNeedMeasuring} \n`
              : ''
          }
          ${
            specificFields.message
              ? `Message: ${specificFields.message} \n`
              : ''
          }
          ${
            specificFields.orderNumber
              ? `Order Number: ${specificFields.orderNumber} \n`
              : ''
          }
          ${
            specificFields.packagingInstructions
              ? `Packaging Instructions: ${specificFields.packagingInstructions} \n`
              : ''
          }
          ${
            specificFields.packingRequirements
              ? `Packaging Requirements: ${specificFields.packingRequirements} \n`
              : ''
          }
          ${
            specificFields.parcelDimensions
              ? `Parcel Dimensions: ${specificFields.parcelDimensions} \n`
              : ''
          }
          ${
            specificFields.quantityOfItems
              ? `Quantity: ${specificFields.quantityOfItems} \n`
              : ''
          }
          ${
            specificFields.reasonForCount
              ? `Reason for count: ${specificFields.reasonForCount} \n`
              : ''
          }
          ${
            specificFields.decline_reason
              ? `Roll need mesasuring: ${specificFields.rollNeedMeasuring} \n`
              : ''
          }
          ${
            specificFields.rollSize
              ? `Roll Size: ${specificFields.rollSize} \n`
              : ''
          }
          ${
            specificFields.skus
              ? `SKUS: ${specificFields.skus} \n`
              : ''
          }
          ${
            specificFields.threadColour
              ? `Thread Color: ${specificFields.threadColour} \n`
              : ''
          }
          ${
            specificFields.typeOfInsert
              ? `Type of Insert: ${specificFields.typeOfInsert} \n`
              : ''
          }
          ${
            specificFields.weight
              ? ` Weight: ${specificFields.weight} \n`
              : ''
          }
             `;
};
