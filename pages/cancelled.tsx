import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Page from '../components/Page';
import { fetchOrdersTrackerStatus } from '../data/services';
import CancelledTable from '../components/Table/Views/Cancelled';
import { useRouter } from 'next/router';
import useUser from '../helpers/hooks/useUser';

const CancelledPage: NextPage = () => {
  const [orders, setOrders] = useState([{}]);
  const [workTasks, setWorkTasks] = useState([{}]);

  const router = useRouter();
  const { user, isLoading } = useUser();

  useEffect(() => {
    fetchOrdersTrackerStatus(99).then((data: any) => {
      setOrders(data.orders);
      setWorkTasks(data.workTasks);
    });
    return () => {};
  }, []);

  useEffect(() => {
    if (!user && !isLoading) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return <div>Loading</div>;
  } else {
    return (
      <>
        <Page
          layoutTitle="Cancelled Orders | Work Management System | TuPack"
          pageName="Cancelled Orders"
        >
          {orders ? (
            <CancelledTable orders={orders} workTasks={workTasks} />
          ) : (
            <div>Loading Table...</div>
          )}
        </Page>
      </>
    );
  }
};

export default CancelledPage;
