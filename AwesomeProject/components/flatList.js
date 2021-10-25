import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';


const flatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
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
        ]}
        renderItem={({item}) => <Text style={styles.items}>{item.key}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    paddingTop: 22,
    paddingHorizontal: 15,
  },
  item: {
    textAlign: 'center',
    marginTop: 20,
    padding: 25,
    fontSize: 30,
    backgroundColor: 'steelblue',
    height: 44,
  },
});

export default flatListBasics;
