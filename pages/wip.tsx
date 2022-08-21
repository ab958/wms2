import { useEffect, useState } from 'react';
import * as React from 'react';
import TableWip from '../components/Table/Views/WIP';
import { NextPage } from 'next';
import Page from '../components/Page';
import { fetchOrdersInProgress } from '../data/services';

const WIPPage: NextPage = () => {
  const [WIPOrders, setWIPOrders] = useState([]);
  const [workers, setWorkers] = useState([]);
  const [workTasks, setWorkTasks] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetchOrdersInProgress().then((data: any) => {
      if (data.orders) {
        setWIPOrders(data.orders);
      }
      if (data.workers) {
        setWorkers(data.workers);
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

  return (
    <>
      <Page
        layoutTitle="Work Orders In Progress | Work Management System | TuPack"
        pageName="Work Orders In Progress"
      >
        {WIPOrders ? (
          <TableWip
            orders={WIPOrders}
            workers={workers}
            tasks={workTasks}
            brands={brands}
          />
        ) : (
          <div>Loading Table...</div>
        )}
      </Page>
    </>
  );
};

export default WIPPage;
