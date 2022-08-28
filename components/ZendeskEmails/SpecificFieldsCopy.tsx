export const SpecificFieldsCopy = (specificFields: any) => {
  return `Work Order Specific Details \n
            ${
              specificFields.approxWeight
                ? `Approximate Weight: ${specificFields.approxWeight} \n`
                : '-'
            }
            ${
              specificFields.ASNandDate
                ? `ASN & Date: ${specificFields.ASNandDate} \n`
                : '-'
            }
            ${
              specificFields.barcodeRequired
                ? `Barcode Required?: ${specificFields.barcodeRequired} \n`
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
                ? `Flat or Hanging?: ${specificFields.flatOrHanging} \n`
                : '-'
            }
            ${
              specificFields.garmentSpecifics
                ? `Garment Specifics: ${specificFields.garmentSpecifics} \n`
                : '-'
            }
            ${
              specificFields.handOrPC
                ? `Hand or PC?: ${specificFields.handOrPC} \n`
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
            // Array
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
                ? `Packing Requirements: ${specificFields.packingRequirements} \n`
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
                ? `Quantity of Items: ${specificFields.quantityOfItems} \n`
                : '-'
            }
            ${
              specificFields.reasonForCount
                ? `Reason for Count?: ${specificFields.reasonForCount} \n`
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
