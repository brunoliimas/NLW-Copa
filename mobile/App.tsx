import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bruno Lima</Text>
      <Text style={styles.text}>React e React Native</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008855',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold'
  },
  text: {
    fontSize: 20,
    color: '#f88',
    fontWeight: 'bold'
  }
});
