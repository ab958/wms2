import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Page from '../components/Page';
import { fetchOrdersTrackerStatus } from '../data/services';
import CompletedTable from '../components/Table/Views/Completed';
import { useRouter } from 'next/router';
import useUser from '../helpers/hooks/useUser';

const CompletedPage: NextPage = () => {
  const [orders, setOrders] = useState([{}]);
  const [workTasks, setWorkTasks] = useState([{}]);
  const [brands, setBrands] = useState([{}]);

  const router = useRouter();
  const { user, isLoading } = useUser();

  useEffect(() => {
    fetchOrdersTrackerStatus(3).then((data: any) => {
      if (data.orders) {
        setOrders(data.orders);
      }
      if (data.workTasks) {
        setWorkTasks(data.workTasks);
      }
      if (data.brands) {
        setBrands(data.brands);
      }
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
          layoutTitle="Completed Orders | Work Management System | TuPack"
          pageName="Completed Orders"
        >
          {orders && brands && workTasks ? (
            <CompletedTable
              orders={orders}
              workTasks={workTasks}
              brands={brands}
            />
          ) : (
            <div>Loading Table...</div>
          )}
        </Page>
      </>
    );
  }
};

export default CompletedPage;
