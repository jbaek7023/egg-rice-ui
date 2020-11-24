import React from 'react';
import { 
Text,
  View, 
  StyleSheet, 
  FlatList} from  'react-native';

const itemList = [
  { name: 'pepper', id: '1' },
  { name: 'kimchi', id: '2' },
  { name: 'go-chu-jang', id: '3' },
  { name: 'onion', id: '4' },
  { name: 'soy sauce', id: '5' },
  { name: 'lettuce', id: '6' },
  { name: 'ramen', id: '7' },
  { name: 'water', id: '8' },
] 

const ListScreen = () => {
  return <FlatList 
    data={itemList}
    keyExtractor={(item) => item.id}
    renderItem={({item})=>{
      return <Text>{item.name}</Text>
    }}
    />
}

const styles = StyleSheet.create({});

export default ListScreen;
