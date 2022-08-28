import { Text, View, StyleSheet } from '@react-pdf/renderer';
import React from 'react';

const borderColor = '#000';
const styles = StyleSheet.create({
  mainCont: {
    width: '50%',
    marginBottom: 20,
  },
  title: {
    fontStyle: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  container: {
    flexDirection: 'column',
    borderColor: borderColor,
    color: '#000',
    borderWidth: 1,
    alignItems: 'flex-start',
    fontStyle: 'bold',
  },
  row: {
    flexDirection: 'row',
    borderColor: borderColor,
    borderWidth: 1,
    width: '100%',
  },
  col1: {
    borderRightColor: borderColor,
    color: '#000',
    borderRightWidth: 1,
    padding: 5,
  },
  col2: {
    padding: 5,
  },
});

type Props = { order: any; task: any };

const OrderSummary: React.FunctionComponent<Props> = ({
  order,
  task,
}) => (
  <View style={styles.mainCont}>
    <Text style={styles.title}>Order Complete Summary</Text>

    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.col1}>Order</Text>
        <Text style={styles.col2}>{order.tracking_id}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.col1}>Task</Text>
        <Text style={styles.col2}>{task.name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.col1}>Units / Qty</Text>
        <Text style={styles.col2}>
          {order.final_units_or_quantity}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.col1}>Finish Time</Text>
        <Text style={styles.col2}>{order.finish_date}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.col1}>Time Taken</Text>
        <Text style={styles.col2}>{order.minutes_taken}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.col1}>Final Price</Text>
        <Text style={styles.col2}>£{order.final_price}</Text>
      </View>
    </View>
  </View>
);

export default OrderSummary;
