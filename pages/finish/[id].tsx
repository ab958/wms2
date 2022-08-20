import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { FinishSummary } from '../../components/WorkOrderScreens/Finish/FinishSummary';
import {
  getAllOrderData,
  updateOrderTable,
} from '../../data/services';
import S3UploadFile from '../../components/s3UploadFile';
import Button from '../../components/Button/';
import { TimeSummary } from '../../components/WorkOrderScreens/Finish/TimeSummary';
import { FinishWO } from '../../components/WorkOrderScreens/Finish/FinishWO';
import { PricingSummary } from '../../components/WorkOrderScreens/Finish/PricingSummary';
import { SpecificDetails } from '../../components/WorkOrderScreens/SpecificDetails';
import { updateZendeskTicket } from '../../data/services/zendesk';
import Router from 'next/router';
import { throwZendeskDBUpdateError } from '../../data/services/helpers';
import { rejectedCopy } from '../../components/ZendeskEmails/RejectedCopy';
import { workOrderCompleteCopy } from '../../components/ZendeskEmails/WorkOrderComplete';

interface File {
  name: string;
}

const FinishIndex: NextPage = (props: any) => {
  const [workOrder, setWorkOrder] = useState<any>();
  const [specifics, setSpecifics] = useState<any>([]);
  const [tasks, setTasks] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    getAllOrderData(props.id).then((data: any) => {
      console.log(data);
      if (data.order) {
        setWorkOrder(data.order);
      }
      if (data.specificFields) {
        setSpecifics(data.specificFields);
      }
      if (data.workTasks) {
        setTasks(data.workTasks);
      }
      if (data.brands) {
        setBrands(data.brands);
      }
    });
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const S3_BUCKET = process.env.NEXT_PUBLIC_LOCAL_S3_BUCKET;
    let formData: any = { tracker_status: 3 };
    let QCPics: any = [];
    let submitFlag = true;
    const emailAd = workOrder ? workOrder.email : '';
    let declineReason: string = '';

    Array.prototype.forEach.call(
      e.target.elements,
      async (element: any) => {
        console.log(element.id, ' ', element.value);
        if (element.id == 'declineReason') {
          formData = {
            ...formData,
            tracker_status: 99,
            decline_reason: element.value,
          };
          submitFlag = false;
        } else if (element.id == 'timeTaken') {
          formData = { ...formData, minutes_taken: element.value };
        } else if (element.id == 'finishTime') {
          formData = { ...formData, finish_time: element.value };
        } else if (element.id == 'finalPrice') {
          formData = {
            ...formData,
            final_price: element.value,
          };
        } else if (element.id == 'finalUnits') {
          formData = {
            ...formData,
            final_units_or_quantity: element.value,
          };
        } else if (
          element.id == 'finalComments' &&
          element.value.length > 1
        ) {
          formData = {
            ...formData,
            final_comments: element.value,
          };
        } else if (element.id == 'QCPics') {
          if (element.files) {
            [...element.files].forEach((file: File) => {
              try {
                S3UploadFile(file, emailAd);
                QCPics.push(
                  `https://${S3_BUCKET}.s3.eu-west-2.amazonaws.com/${emailAd}/${file.name}`
                );
              } catch (error) {
                console.log(error);
                throw new Error('Error uploading Image');
              }
            });
          }
        }
        QCPics.length > 0 ? (formData['qc_pics'] = QCPics) : null;
      }
    );
    if (!submitFlag) {
      const rejectedBody: any = rejectedCopy(
        declineReason,
        workOrder,
        tasks,
        brands,
        specifics
      );
      const ticketData = {
        ticket: {
          subject: `Ticket Rejected: ${workOrder['tracking_id']} `,
          status: 'solved',
          recipient: workOrder.email,
          comment: {
            body: rejectedBody,
          },
        },
      };
      const tableUpdate = await updateOrderTable(formData, props.id);
      if (tableUpdate.error) {
        throwZendeskDBUpdateError(tableUpdate.error);
      }
      const response = await updateZendeskTicket(
        workOrder.zendesk_id,
        ticketData
      );
      console.log(response);
      if (!response.success) {
        alert('Error closing Zendesk Ticket - please try again');
        throw new Error('Zendesk Ticket Update error');
      }
    } else {
      const completeBody = workOrderCompleteCopy(
        workOrder,
        specifics
      );
      const ticketData = {
        ticket: {
          subject: `Work Order Completed: ${workOrder['tracking_id']}`,
          status: 'solved',
          recipient: workOrder.email,
          comment: {
            body: completeBody,
          },
        },
      };
      const tableUpdate = await updateOrderTable(formData, props.id);
      if (tableUpdate.error) {
        throwZendeskDBUpdateError(tableUpdate.error);
      }
      const response = await updateZendeskTicket(
        workOrder.zendesk_id,
        ticketData
      );
      console.log(response);
      if (!response.success) {
        alert('Error closing Zendesk Ticket - please try again');
        throw new Error('Zendesk Ticket Update error');
      }
    }
    alert('Ticket closed successfully');
    Router.push({
      pathname: `/wip`,
    });
  };

  return (
    <>
      {workOrder && specifics && tasks && (
        <>
          {console.log(workOrder, specifics, tasks)}
          <Layout title={`Complete WO`} />
          <Button text="Go Back" hyperlink="/wip" />
          <FinishSummary workOrder={workOrder} tasks={tasks} />
          <form onSubmit={handleSubmit}>
            <TimeSummary workOrder={workOrder} />
            <PricingSummary workOrder={workOrder} />
            <SpecificDetails
              specifics={specifics}
              workOrder={workOrder}
            />
            <FinishWO />
          </form>
        </>
      )}
    </>
  );
};

export default FinishIndex;

export async function getServerSideProps(context: any) {
  const id = context.query.id;
  return {
    props: {
      id,
    },
  };
}
