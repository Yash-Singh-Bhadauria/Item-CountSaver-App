import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const AllItems = () => {
  const dataObject = useSelector(state => state.data)

  const dataArray = Object.entries(dataObject).map(([name, quantity]) => ({
    name,
    quantity,
  }))

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.itemRow,
        {
          backgroundColor: item.quantity >= 10 ? '#90EE90' : '#FA8072',
        },
      ]}
    >
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.itemText}>{item.quantity}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headTxt}>Item</Text>
        <Text style={styles.headTxt}>Quantity</Text>
      </View>

      <FlatList
        data={dataArray}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </View>
  )
}

export default AllItems;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headTxt: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 14,
  },
})
