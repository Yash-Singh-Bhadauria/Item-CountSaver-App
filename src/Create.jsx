import { StyleSheet, Text, View, TextInput, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import { addOrUpdateValue, deleteValue } from '../redux/slice'
import { useSelector, useDispatch } from 'react-redux'

const Create = () => {
  const [item, setItem] = useState('')
  const [value, setValue] = useState('')

  const dispatch = useDispatch();

  const dataObject = useSelector(state => state.data);
  const dataArray = Object.entries(dataObject).map(([name, quantity]) => ({
    name,
    quantity,
  }))

  const handleAddOrUpdate = () => {
    if (item && value) {
      dispatch(addOrUpdateValue({ key: item, value: parseInt(value) }));
      setItem('')
      setValue('')
    }
  }

  const handleDelete = (key) => {
    dispatch(deleteValue(key));
    if (key === item) {
      setItem('')
      setValue('')
    }
  }

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
      <Text style={styles.actionText} onPress={() => {
        setItem(item.name);
        setValue(item.quantity.toString());
      }}>
        Edit
      </Text>
      <Text style={[styles.actionText]} onPress={() => handleDelete(item.name)}>
        Delete
      </Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Item name"
        value={item}
        onChangeText={(text) => setItem(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Quantity"
        value={value}
        onChangeText={(text) => setValue(text)}
        keyboardType="numeric"
        style={styles.input}
      />

      <Pressable onPress={handleAddOrUpdate} style={styles.button}>
        <Text style={styles.buttonText}>Add / Update Item</Text>
      </Pressable>

      <Text style={styles.subHeading}>All Items in Stock</Text>

      <FlatList
        data={dataArray}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  )
}

export default Create;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 10,
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  subHeading: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 10,
    marginBottom: 6,
  },
  itemText: {
    fontSize: 14,
    flex: 1,
  },
  actionText: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#0000ff',
  },
})
