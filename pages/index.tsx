import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Page from '../components/Page';
import { fetchOrdersTrackerStatus } from '../data/services';
import NewOrderTable from '../components/Table/Views/NewOrders';
import useUser from '../helpers/hooks/useUser';
import { useRouter } from 'next/router';

const IndexPage: NextPage = () => {
  const [orders, setOrders] = useState([]);
  const [workTasks, setWorkTasks] = useState([]);

  const router = useRouter();
  const { user, isLoading } = useUser();

  useEffect(() => {
    fetchOrdersTrackerStatus(0).then((data: any) => {
      if (data.orders) {
        setOrders(data.orders);
      }
      if (data.workTasks) {
        setWorkTasks(data.workTasks);
      }
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
    return (
      <>
        <Page
          layoutTitle="New Orders | Work Management System | TuPack"
          pageName="New Orders"
        >
          {orders && workTasks ? (
            <NewOrderTable orders={orders} tasks={workTasks} />
          ) : (
            <div>Loading Table...</div>
          )}
        </Page>
      </>
    );
  }
};

export default IndexPage;
