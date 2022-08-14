import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { QueueSummary } from '../../components/WorkOrderScreens/StartQueue/QueueSummary';
import { SpecificDetails } from '../../components/WorkOrderScreens/SpecificDetails';
import { StartChoices } from '../../components/WorkOrderScreens/StartQueue/StartChoices';
import { ActionStartQueue } from '../../components/WorkOrderScreens/StartQueue/ActionStartQueue';
import { getAllOrderData } from '../../data/services';
import { supabaseClient } from '../../lib/client';
import Button from '../../components/Button';
import { updateZendeskTicket } from '../../data/services/zendesk';
import Router from 'next/router';

const Index: NextPage = (props: any) => {
  const [workOrder, setWorkOrder] = useState({
    tracking_id: null,
  });
  const [specifics, setSpecifics] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    getAllOrderData(props.id).then((data: any) => {
      if (data.order) {
        setWorkOrder(data.order);
      }
      if (data.specificFields) {
        setSpecifics(data.specificFields);
      }
      if (data.workTasks) {
        setTasks(data.workTasks);
      }
      if (data.workers) {
        setWorkers(data.workers);
      }
    });
  }, []);
  console.log('specifics->', specifics);

  console.log('work oder=>', workOrder);
  console.log('workers=>', workers);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let formData: any = {
      tracker_status: 2,
    };
    let submitFlag = true;

    console.log(e.target.elements, '<=elements');
    Array.prototype.forEach.call(
      e.target.elements,
      async (element: any) => {
        console.log('element id =>', element.id, ' ', element.value);

        if (element.id == 'declineReason') {
          formData = {
            ...formData,
            tracker_status: 99,
            decline_reason: element.value,
          };
          submitFlag = false;
        } else if (element.id == 'startDate') {
          formData = { ...formData, start_time: element.value };
        } else if (element.id == 'estFinishDate') {
          formData = {
            ...formData,
            expected_finish_date: element.value,
          };
        } else if (element.id == 'submitReject') {
          submitFlag = false;
        }

        if (!submitFlag) {
          const ticketData = {
            ticket: {
              subject: `Ticket Rejected: ${workOrder['tracking_id']}`,
              status: 'solved',
              recipient: workOrder.email,
              comment: {
                body: `
                We are sorry to inform you that your work order has not been completed. The reason for decline and full work order details are below.
                  ${
                    workOrder.decline_reason
                      ? `Decline reason: ${workOrder.decline_reason} \n`
                      : ''
                  }
                  ${
                    workOrder.assigned_to_id
                      ? `Assigned To: ${workOrder.assigned_to_id} \n`
                      : ''
                  }
                  ${
                    workOrder.brand_entry
                      ? `Brand Entry: ${workOrder.brand_entry} \n`
                      : ''
                  }
                  ${
                    workOrder.brand_id
                      ? `Brand ID: ${workOrder.brand_id} \n`
                      : ''
                  }
                  ${
                    workOrder.created_at
                      ? `Created at: ${workOrder.created_at} \n`
                      : ''
                  }
                  ${
                    workOrder.description
                      ? `Description: ${workOrder.description} \n`
                      : ''
                  }
                  ${
                    workOrder.email
                      ? `Email: ${workOrder.email} \n`
                      : ''
                  }
                  ${
                    workOrder.expected_finish_date
                      ? `Finish Date:  ${workOrder.expected_finish_date} \n`
                      : ''
                  }
                  ${
                    workOrder.final_comments
                      ? ` Final Comments: ${workOrder.final_comments} \n`
                      : ''
                  }
                  ${
                    workOrder.final_price
                      ? `Final Price: ${workOrder.final_price} \n`
                      : ''
                  }
                  ${
                    workOrder.final_units_or_quantity
                      ? `Final Units/Quantity: ${workOrder.final_units_or_quantity} \n`
                      : ''
                  }
                  ${
                    workOrder.finish_time
                      ? `Finish Time: ${workOrder.finish_time} \n`
                      : ''
                  }
                  ${
                    workOrder.id
                      ? ` Order Id: ${workOrder.id} \n`
                      : ''
                  }
                  ${
                    workOrder.initial_comments
                      ? `Comments: ${workOrder.initial_comments} \n`
                      : ''
                  }
                  ${
                    workOrder.initial_cost
                      ? ` Inital Cost: ${workOrder.initial_cost} \n`
                      : ''
                  }
                  ${
                    workOrder.initial_units_or_quantity
                      ? ` Inital Units/Quantity: ${workOrder.initial_units_or_quantity} \n`
                      : ''
                  }
                  ${
                    workOrder.minutes_taken
                      ? `Minutes Taken: ${workOrder.minutes_taken} \n`
                      : ''
                  }
                  ${
                    workOrder.name
                      ? ` Order Name: ${workOrder.name} \n`
                      : ''
                  }
                  ${
                    workOrder.number
                      ? ` Order Number: ${workOrder.number} \n`
                      : ''
                  }
                  ${
                    workOrder.receipt_pdf_url
                      ? ` PDF URL: ${workOrder.receipt_pdf_url} \n`
                      : ''
                  }
                  ${
                    workOrder.start_time
                      ? `  Start Time: ${workOrder.start_time} \n`
                      : ''
                  }
                  ${
                    workOrder.target_time
                      ? `  Target Time: ${workOrder.target_time} \n`
                      : ''
                  }
                  ${
                    workOrder.time_accepted
                      ? `  Time Accepted: ${workOrder.time_accepted} \n`
                      : ''
                  }
                  ${
                    workOrder.tracker_status
                      ? ` Tracker Status: ${workOrder.tracker_status} \n`
                      : ''
                  }
                  ${
                    workOrder.work_task_id
                      ? ` Work Task ID: ${workOrder.work_task_id} \n`
                      : ''
                  }
                 
                  \n Order Specifics: \n

                  ${
                    specifics.approxWeight
                      ? `Approx Weight: ${specifics.approxWeight} \n`
                      : ''
                  }
                  ${
                    specifics.barcodeRequired
                      ? ` Barcode Requied: ${specifics.barcodeRequired} \n`
                      : ''
                  }
                  ${
                    specifics.collectionAddress
                      ? `Collection Address: ${specifics.collectionAddress} \n`
                      : ''
                  }
                  ${
                    specifics.courierId
                      ? `CourierID: ${specifics.courierId} \n`
                      : ''
                  }
                  ${
                    specifics.dateRequired
                      ? `Date Required: ${specifics.dateRequired} \n`
                      : ''
                  }
                  ${
                    specifics.deliveryAddress
                      ? `Delivery Address: ${specifics.deliveryAddress} \n`
                      : ''
                  }
                  ${
                    specifics.deliveryType
                      ? `Delivery Type: ${specifics.deliveryType} \n`
                      : ''
                  }
                  ${
                    specifics.dimensions
                      ? `Dimensions: ${specifics.dimensions} \n`
                      : ''
                  }
                  ${
                    specifics.finalSKU
                      ? `Final SKU: ${specifics.finalSKU} \n`
                      : ''
                  }
                  ${
                    specifics.flatOrHanging
                      ? `Flat or Hanging: ${specifics.flatOrHanging} \n`
                      : ''
                  }
                  ${
                    specifics.garmentSpecifics
                      ? `Garment Specifics: ${specifics.garmentSpecifics} \n`
                      : ''
                  }
                  ${
                    specifics.handOrPC
                      ? `Hand or PC: ${specifics.handOrPC} \n`
                      : ''
                  }
                  ${
                    specifics.itemNeedMeasuring
                      ? `Item Need Measuring: ${specifics.itemNeedMeasuring} \n`
                      : ''
                  }
                  ${
                    specifics.message
                      ? `Message: ${specifics.message} \n`
                      : ''
                  }
                  ${
                    specifics.orderNumber
                      ? `Order Number: ${specifics.orderNumber} \n`
                      : ''
                  }
                  ${
                    specifics.packagingInstructions
                      ? `Packaging Instructions: ${specifics.packagingInstructions} \n`
                      : ''
                  }
                  ${
                    specifics.packingRequirements
                      ? `Packaging Requirements: ${specifics.packingRequirements} \n`
                      : ''
                  }
                  ${
                    specifics.parcelDimensions
                      ? `Parcel Dimensions: ${specifics.parcelDimensions} \n`
                      : ''
                  }
                  ${
                    specifics.quantityOfItems
                      ? `Quantity: ${specifics.quantityOfItems} \n`
                      : ''
                  }
                  ${
                    specifics.reasonForCount
                      ? `Reason for count: ${specifics.reasonForCount} \n`
                      : ''
                  }
                  ${
                    specifics.decline_reason
                      ? `Roll need mesasuring: ${specifics.rollNeedMeasuring} \n`
                      : ''
                  }
                  ${
                    specifics.rollSize
                      ? `Roll Size: ${specifics.rollSize} \n`
                      : ''
                  }
                  ${
                    specifics.skus ? `SKUS: ${specifics.skus} \n` : ''
                  }
                  ${
                    specifics.threadColour
                      ? `Thread Color: ${specifics.threadColour} \n`
                      : ''
                  }
                  ${
                    specifics.typeOfInsert
                      ? `Type of interest: ${specifics.typeOfInsert} \n`
                      : ''
                  }
                  ${
                    specifics.weight
                      ? ` Weight: ${specifics.weight} \n`
                      : ''
                  }
                     `,
              },
            },
          };
          const response = await updateZendeskTicket(
            workOrder.zendesk_id,
            ticketData
          );
          console.log(response);
          if (!response.success) {
            alert('Error updating Zendesk Ticket - please try again');
            throw new Error('Zendesk Ticket Update error');
          }
        } else {
          const ticketData = {
            ticket: {
              subject: `Work Order Started: ${workOrder['tracking_id']} `,
              status: 'pending',
              recipient: workOrder.email,
              comment: {
                body: `
                Your Work Order has now been started, we will let you know once it is complete.
              ${
                workOrder.assigned_to_id
                  ? `Assigned To: ${workOrder.assigned_to_id} \n`
                  : ''
              }
              ${
                workOrder.brand_entry
                  ? `Brand Entry: ${workOrder.brand_entry} \n`
                  : ''
              }
              ${
                workOrder.brand_id
                  ? `Brand ID: ${workOrder.brand_id} \n`
                  : ''
              }
              ${
                workOrder.created_at
                  ? `Created at: ${workOrder.created_at} \n`
                  : ''
              }
              ${
                workOrder.description
                  ? `Description: ${workOrder.description} \n`
                  : ''
              }
              ${workOrder.email ? `Email: ${workOrder.email} \n` : ''}
              ${
                workOrder.expected_finish_date
                  ? `Finish Date:  ${workOrder.expected_finish_date} \n`
                  : ''
              }
              ${
                workOrder.final_comments
                  ? ` Final Comments: ${workOrder.final_comments} \n`
                  : ''
              }
              ${
                workOrder.final_price
                  ? `Final Price: ${workOrder.final_price} \n`
                  : ''
              }
              ${
                workOrder.final_units_or_quantity
                  ? `Final Units/Quantity: ${workOrder.final_units_or_quantity} \n`
                  : ''
              }
              ${
                workOrder.finish_time
                  ? `Finish Time: ${workOrder.finish_time} \n`
                  : ''
              }
              ${workOrder.id ? ` Order Id: ${workOrder.id} \n` : ''}
              ${
                workOrder.initial_comments
                  ? `Comments: ${workOrder.initial_comments} \n`
                  : ''
              }
              ${
                workOrder.initial_cost
                  ? ` Inital Cost: ${workOrder.initial_cost} \n`
                  : ''
              }
              ${
                workOrder.initial_units_or_quantity
                  ? ` Inital Units/Quantity: ${workOrder.initial_units_or_quantity} \n`
                  : ''
              }
              ${
                workOrder.minutes_taken
                  ? `Minutes Taken: ${workOrder.minutes_taken} \n`
                  : ''
              }
              ${
                workOrder.name
                  ? ` Order Name: ${workOrder.name} \n`
                  : ''
              }
              ${
                workOrder.number
                  ? ` Order Number: ${workOrder.number} \n`
                  : ''
              }
              ${
                workOrder.receipt_pdf_url
                  ? ` PDF URL: ${workOrder.receipt_pdf_url} \n`
                  : ''
              }
              ${
                workOrder.start_time
                  ? `  Start Time: ${workOrder.start_time} \n`
                  : ''
              }
              ${
                workOrder.target_time
                  ? `  Target Time: ${workOrder.target_time} \n`
                  : ''
              }
              ${
                workOrder.time_accepted
                  ? `  Time Accepted: ${workOrder.time_accepted} \n`
                  : ''
              }
              ${
                workOrder.tracker_status
                  ? ` Tracker Status: ${workOrder.tracker_status} \n`
                  : ''
              }
              ${
                workOrder.work_task_id
                  ? ` Work Task ID: ${workOrder.work_task_id} \n`
                  : ''
              }
             
              \n Order Specifics: \n

              ${
                specifics.approxWeight
                  ? `Approx Weight: ${specifics.approxWeight} \n`
                  : ''
              }
              ${
                specifics.barcodeRequired
                  ? ` Barcode Requied: ${specifics.barcodeRequired} \n`
                  : ''
              }
              ${
                specifics.collectionAddress
                  ? `Collection Address: ${specifics.collectionAddress} \n`
                  : ''
              }
              ${
                specifics.courierId
                  ? `CourierID: ${specifics.courierId} \n`
                  : ''
              }
              ${
                specifics.dateRequired
                  ? `Date Required: ${specifics.dateRequired} \n`
                  : ''
              }
              ${
                specifics.deliveryAddress
                  ? `Delivery Address: ${specifics.deliveryAddress} \n`
                  : ''
              }
              ${
                specifics.deliveryType
                  ? `Delivery Type: ${specifics.deliveryType} \n`
                  : ''
              }
              ${
                specifics.dimensions
                  ? `Dimensions: ${specifics.dimensions} \n`
                  : ''
              }
              ${
                specifics.finalSKU
                  ? `Final SKU: ${specifics.finalSKU} \n`
                  : ''
              }
              ${
                specifics.flatOrHanging
                  ? `Flat or Hanging: ${specifics.flatOrHanging} \n`
                  : ''
              }
              ${
                specifics.garmentSpecifics
                  ? `Garment Specifics: ${specifics.garmentSpecifics} \n`
                  : ''
              }
              ${
                specifics.handOrPC
                  ? `Hand or PC: ${specifics.handOrPC} \n`
                  : ''
              }
              ${
                specifics.itemNeedMeasuring
                  ? `Item Need Measuring: ${specifics.itemNeedMeasuring} \n`
                  : ''
              }
              ${
                specifics.message
                  ? `Message: ${specifics.message} \n`
                  : ''
              }
              ${
                specifics.orderNumber
                  ? `Order Number: ${specifics.orderNumber} \n`
                  : ''
              }
              ${
                specifics.packagingInstructions
                  ? `Packaging Instructions: ${specifics.packagingInstructions} \n`
                  : ''
              }
              ${
                specifics.packingRequirements
                  ? `Packaging Requirements: ${specifics.packingRequirements} \n`
                  : ''
              }
              ${
                specifics.parcelDimensions
                  ? `Parcel Dimensions: ${specifics.parcelDimensions} \n`
                  : ''
              }
              ${
                specifics.quantityOfItems
                  ? `Quantity: ${specifics.quantityOfItems} \n`
                  : ''
              }
              ${
                specifics.reasonForCount
                  ? `Reason for count: ${specifics.reasonForCount} \n`
                  : ''
              }
              ${
                specifics.decline_reason
                  ? `Roll need mesasuring: ${specifics.rollNeedMeasuring} \n`
                  : ''
              }
              ${
                specifics.rollSize
                  ? `Roll Size: ${specifics.rollSize} \n`
                  : ''
              }
              ${specifics.skus ? `SKUS: ${specifics.skus} \n` : ''}
              ${
                specifics.threadColour
                  ? `Thread Color: ${specifics.threadColour} \n`
                  : ''
              }
              ${
                specifics.typeOfInsert
                  ? `Type of interest: ${specifics.typeOfInsert} \n`
                  : ''
              }
              ${
                specifics.weight
                  ? ` Weight: ${specifics.weight} \n`
                  : ''
              }
                 `,
              },
            },
          };
          const response = await updateZendeskTicket(
            workOrder.zendesk_id,
            ticketData
          );
          console.log(response);
          if (!response.success) {
            alert('Error updating Zendesk Ticket - please try again');
            throw new Error('Zendesk Ticket Update error');
          }
        }
        const { data, error } = await supabaseClient
          .from('order')
          .update(formData)
          .eq('id', props.id);
        console.log(data);
        if (error) {
          alert('Database update failed - please try again');
          console.log(error.message);
          throw new Error('Order Update error');
        }
        alert('Ticket updated successfully');
        Router.push({
          pathname: `/notstarted`,
        });
      }
    );
  };

  return (
    <>
      {workOrder && tasks && workers && specifics && (
        <>
          <Layout
            title={`Order #${workOrder.tracking_id} | Queue | WMS | TuPack`}
          />
          <Button text="Go Back" hyperlink="/notstarted" />
          <QueueSummary workOrder={workOrder} tasks={tasks} />
          <SpecificDetails
            specifics={specifics}
            workOrder={workOrder}
          />
          <form onSubmit={handleSubmit}>
            <StartChoices workers={workers} />
            <ActionStartQueue />
          </form>
        </>
      )}
    </>
  );
};

export default Index;

export async function getServerSideProps(context: any) {
  const id = context.query.id;
  return {
    props: {
      id,
    },
  };
}
