import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    appbar: {
      height: 50,
      padding: 10,
      backgroundColor: '#ff6600'
    },
    title: {
      color: '#ffffff',
      fontSize: 24
    }
});

const AppBar = () => {

  return (
    <View style={styles.appbar}>
      <Text style={styles.title}>AppName</Text>
    </View>
  )
}

export default AppBar;
