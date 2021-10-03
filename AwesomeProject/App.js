/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CatNames from './components/CatNames';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';



const App = () => {
  const milo = 'thsi is milo';
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{milo}</Text>
        <Image source={require('./img/milo.png')} />
        <CatNames />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 50,
  },
});
export default App;
