import { Text, View, StyleSheet, Link } from '@react-pdf/renderer';
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
    width: '100%',
    borderWidth: 1,
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

type Props = { order: any; task: any; specifics: any };

const InitialClientDetails: React.FunctionComponent<Props> = ({
  order,
  task,
  specifics,
}) => (
  <View style={styles.mainCont}>
    <Text style={styles.title}>Initial Client Details</Text>

    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.col1}>Task</Text>
        <Text style={styles.col2}>{task.name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.col1}>Initial Units/Quantity</Text>
        <Text style={styles.col2}>
          {order.initial_units_or_quantity}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.col1}>SKUs</Text>
        <Text style={styles.col2}>
          {specifics.skus ? specifics.skus : 'n/a'}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.col1}>Description</Text>
        <Text style={styles.col2}>{order.description}</Text>
      </View>
      {specifics.pics && specifics.pics.length > 0 && (
        <View style={styles.row}>
          <Text style={styles.col1}>Quality Control Pics</Text>
          <View>
            {order.qc_pics.map((url: string, index: number) => (
              <Text style={styles.col2}>
                Image {index + 1} -<Link src={url}>Link</Link>
              </Text>
            ))}
          </View>
        </View>
      )}
    </View>
  </View>
);

export default InitialClientDetails;
