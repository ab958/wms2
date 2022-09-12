import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { QueueSummary } from '../../components/WorkOrderScreens/StartQueue/QueueSummary';
import { SpecificDetails } from '../../components/WorkOrderScreens/SpecificDetails';
import { StartChoices } from '../../components/WorkOrderScreens/StartQueue/StartChoices';
import { ActionStartQueue } from '../../components/WorkOrderScreens/StartQueue/ActionStartQueue';
import {
  getAllOrderData,
  updateOrderTable,
} from '../../data/services';
import Button from '../../components/Button';
// import { updateZendeskTicket } from '../../data/services/zendesk';
import Router, { useRouter } from 'next/router';
// import { rejectedCopy } from '../../components/ZendeskEmails/RejectedCopy';
import { throwDBUpdateError } from '../../data/services/helpers';
import useUser from '../../helpers/hooks/useUser';

const Index: NextPage = (props: any) => {
  const [workOrder, setWorkOrder] = useState<any>();
  const [specifics, setSpecifics] = useState<any>([]);
  const [tasks, setTasks] = useState([]);
  const [workers, setWorkers] = useState([]);
  // const [brands, setBrands] = useState([]);

  const router = useRouter();
  const { user, isLoading } = useUser();

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
      // if (data.brands) {
      //   setBrands(data.brands);
      // }
    });
  }, []);

  useEffect(() => {
    if (!user && !isLoading) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return <div>Loading</div>;
  } else {
    const handleSubmit = async (e: any) => {
      e.preventDefault();

      let formData: any = {
        tracker_status: 2,
      };
      let submitFlag = true;
      // let declineReason: string = '';

      Array.prototype.forEach.call(
        e.target.elements,
        async (element: any) => {
          // console.log('element id =>', element.id, ' ', element.value);
          if (element.id == 'declineReason') {
            formData = {
              ...formData,
              tracker_status: 99,
              decline_reason: element.value,
            };
            submitFlag = false;
            // declineReason = element.value;
          } else if (element.id == 'startDate') {
            formData = { ...formData, start_time: element.value };
          } else if (element.id == 'assignWorker') {
            formData = { ...formData, worker_id: element.value };
          } else if (element.id == 'estFinishDate') {
            formData = {
              ...formData,
              expected_finish_date: element.value,
            };
          } else if (element.id == 'submitReject') {
            submitFlag = false;
          }
        }
      );
      if (!submitFlag) {
        // const rejectedBody: any = rejectedCopy(
        //   declineReason,
        //   workOrder,
        //   tasks,
        //   brands,
        //   specifics
        // );
        // const ticketData = {
        //   ticket: {
        //     subject: `Ticket Rejected: ${workOrder['tracking_id']} `,
        //     status: 'solved',
        //     recipient: workOrder.email,
        //     comment: {
        //       body: rejectedBody,
        //     },
        //   },
        // };
        const tableUpdate = await updateOrderTable(
          formData,
          props.id
        );
        if (tableUpdate.error) {
          throwDBUpdateError(tableUpdate.error);
        }
        // const response = await updateZendeskTicket(
        //   workOrder.zendesk_id,
        //   ticketData
        // );
        // console.log(response);
        // if (!response.success) {
        //   alert('Error updating Zendesk Ticket - please try again');
        //   throw new Error('Zendesk Ticket Update error');
        // }
      } else {
        // const ticketData = {
        //   ticket: {
        //     subject: `Work Order Started: ${workOrder['tracking_id']} `,
        //     status: 'pending',
        //     recipient: workOrder.email,
        //     comment: {
        //       body: `
        //         `Hey!
        //
        //       We wanted to let you know that the team have started work on your Works Order request. We’ll be in touch once it is finished.
        //
        //       Tu Pack
        //       ` +
        //         `
        //         ${workOrder.start_time
        //           ? `Start Time: ${workOrder.start_time} \n`
        //           : ''
        //       }
        //       ${
        //         workOrder.expected_finish_date
        //           ? `Finish Date:  ${workOrder.expected_finish_date} \n`
        //           : ''
        //       }
        //       ${
        //         workOrder.worker_id
        //           ? `Brand ID: ${workOrder.brand_id} \n`
        //           : ''
        //       }
        //       ${
        //         workOrder.brand_id
        //           ? `Brand ID: ${workOrder.brand_id} \n`
        //           : ''
        //       }
        //       ${
        //         workOrder.initial_cost
        //           ? ` Inital Cost: ${workOrder.initial_cost} \n`
        //           : ''
        //       }
        //       ${
        //         workOrder.work_task_id
        //           ? ` Work Task ID: ${workOrder.work_task_id} \n`
        //           : ''
        //       }
        //        `,
        //     },
        //   },
        // };
        const tableUpdate = await updateOrderTable(
          formData,
          props.id
        );
        if (tableUpdate.error) {
          throwDBUpdateError(tableUpdate.error);
        }
        // const response = await updateZendeskTicket(
        //   workOrder.zendesk_id,
        //   ticketData
        // );
        // console.log(response);
        // if (!response.success) {
        //   alert('Error updating Zendesk Ticket - please try again');
        //   throw new Error('Zendesk Ticket Update error');
        // }
      }
      alert('Ticket updated successfully');
      Router.push({
        pathname: `/notstarted`,
      });
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
  }
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
