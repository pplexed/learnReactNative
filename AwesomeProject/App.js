/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

const items = [
  {key: 'Devin'},
  {key: 'Dan'},
  {key: 'Dominic'},
  {key: 'Jackson'},
  {key: 'James'},
  {key: 'Joel'},
  {key: 'John'},
  {key: 'Jillian'},
  {key: 'Jimmy'},
  {key: 'Julie'},
];

const App = () => {
  const selection = 'select your developer and metacritic score range';
  return (
    <View style={styles.container}>
      <Text>Testuing this out</Text>
      <FlatList
        data={items}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 22,
    paddingHorizontal: 15,
  },
  item: {
    textAlign: 'center',
    marginTop: 20,
    padding: 25,
    fontSize: 30,
    backgroundColor: 'steelblue',
  },
});