import React from 'react';
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


const CatNames = () => {
  const milo = 'this is something different way way different';
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>{milo}</Text>
  </View>
  );
};

export default CatNames;