import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { SpecificDetails } from '../../components/WorkOrderScreens/SpecificDetails';
import { getAllOrderData } from '../../data/services';
import Button from '../../components/Button';
import { InitialClientDetails } from '../../components/WorkOrderScreens/Completed/InitialClientDetails';
import { CancelledSummary } from '../../components/WorkOrderScreens/AcceptorReject/CancelledSummary';

const Index: NextPage = (props: any) => {
  const [workOrder, setWorkOrder] = useState({ tracking_id: null });
  const [specifics, setSpecifics] = useState({});
  const [tasks, setTasks] = useState({});
  const [workers, setWorkers] = useState({});

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
      if (data.workers) {
        setWorkers(data.workers);
      }
    });
  }, []);

  return (
    <>
      {workOrder && tasks && workers && specifics && (
        <>
          <Layout
            title={`Order #${workOrder.tracking_id} | Cancelled Orders | WMS | TuPack`}
          />
          <Button text="Go Back" hyperlink="/cancelled" />
          <CancelledSummary workOrder={workOrder} tasks={tasks} />
          <InitialClientDetails
            workOrder={workOrder}
            tasks={tasks}
            specificFields={specifics}
          />
          <SpecificDetails
            specifics={specifics}
            workOrder={workOrder}
          />
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
