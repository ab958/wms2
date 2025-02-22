import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { WOSummary } from '../../components/WorkOrderScreens/WOSummary';
import { SpecificDetails } from '../../components/WorkOrderScreens/SpecificDetails';
import { EstimatedCosts } from '../../components/WorkOrderScreens/EstimatedCosts';
import {
  queueOrderAcceptReject,
  updateOrderTable,
} from '../../data/services';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Router from 'next/router';
import { updateZendeskTicket } from '../../data/services/zendesk';
import { rejectedCopy } from '../../components/ZendeskEmails/RejectedCopy';
import {
  getBrandName,
  throwDBUpdateError,
} from '../../data/services/helpers';
import { AllOrderFieldsCopy } from '../../components/ZendeskEmails/AllOrderFieldsCopy';
import { SpecificFieldsCopy } from '../../components/ZendeskEmails/SpecificFieldsCopy';

const Index: NextPage = (props: any) => {
  const [workOrder, setWorkOrder] = useState<any>({});
  const [specifics, setSpecifics] = useState<any>([]);
  const [tasks, setTasks] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    queueOrderAcceptReject(props.id).then((data: any) => {
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
      } else {
      }
    });
  }, []);

  const orderCopy: string = AllOrderFieldsCopy(
    workOrder,
    tasks,
    brands
  );
  const specificFieldsCopy: string = SpecificFieldsCopy(specifics);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let formData: any = {
      date_accepted: new Date().toISOString().toLocaleString(),
      tracker_status: 1,
    };
    let submitFlag = true;
    let declineReason: string = '';
    let brandName: string = '';
    let targetTime: number = 0;
    let initialComments: string = '';

    Array.prototype.forEach.call(
      e.target.elements,
      async (element: any) => {
        // console.log(element.id, ' ', element.value);
        if (element.id == 'updateTime') {
          formData = { ...formData, target_time: element.value };
          targetTime = element.value;
        } else if (element.id == 'initialComments' && element.value) {
          formData = { ...formData, initial_comments: element.value };
          initialComments = element.value;
        } else if (element.id == 'declineReason' && element.value) {
          formData = {
            ...formData,
            decline_reason: element.value,
          };
          declineReason = element.value;
        } else if (element.id == 'brands') {
          formData = { ...formData, brand_id: element.value };
          brandName = getBrandName(brands, element.value);
        } else if (element.id == 'submitReject') {
          formData = { ...formData, tracker_status: 99 };
          submitFlag = false;
        }
      }
    );
    if (!submitFlag) {
      const rejectedbody: any = rejectedCopy(
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
            body: rejectedbody,
          },
        },
      };
      const tableUpdate = await updateOrderTable(formData, props.id);
      if (tableUpdate.error) {
        throwDBUpdateError(tableUpdate.error);
      }
      const response = await updateZendeskTicket(
        workOrder.zendesk_id,
        ticketData
      );
      if (!response.success) {
        alert('Error updating Zendesk Ticket - please try again');
        throw new Error('Zendesk Ticket Update error');
      }
    } else {
      const ticketData = {
        ticket: {
          subject: `WMS Work Order Accepted | ${brandName} | ${workOrder['tracking_id']} `,
          status: 'pending',
          recipient: workOrder.email,
          comment: {
            body:
              `Your work order request has been approved by the team!

            You’ll get another email to let you know when we start working on your request and another to let you know that we have finished it.

            You don’t need to do anything else, we’ll be in touch with an update soon!

            From,

            The Tu Pack Team
            ` +
              `          ${
                initialComments
                  ? `Warehouse Comments: ${initialComments} \n`
                  : 'Warehouse Comments: n/a'
              }
            ${
              targetTime ? `Target Time: ${targetTime}mins \n` : '-'
            }` +
              `${orderCopy}` +
              `${specificFieldsCopy}`,
          },
        },
      };

      const tableUpdate = await updateOrderTable(formData, props.id);
      if (tableUpdate.error) {
        throwDBUpdateError(tableUpdate.error);
      }
      const response = await updateZendeskTicket(
        workOrder.zendesk_id,
        ticketData
      );
      if (!response.success) {
        alert('Error updating Zendesk Ticket - please try again');
        throw new Error('Zendesk Ticket Update error');
      }
    }
    alert('Ticket updated successfully');
    Router.push({
      pathname: `/`,
    });
  };

  return (
    <>
      {workOrder && tasks && brands && specifics && (
        <>
          <Layout
            title={`Order #${workOrder.tracking_id} | Pending | WMS | TuPack`}
          />
          <Title text={`Pending Order - #${workOrder.tracking_id}`} />
          <Button text="Go Back" hyperlink="/" />
          <WOSummary order={workOrder} tasks={tasks} />
          <SpecificDetails
            specifics={specifics}
            workOrder={workOrder}
          />
          <form onSubmit={handleSubmit}>
            <EstimatedCosts
              tasks={tasks}
              order={workOrder}
              brands={brands}
            />
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
