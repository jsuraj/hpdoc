import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#DDDDDD'
  }
});
const LoadMore = ({onLoadMore}) => {

  return (
    <TouchableHighlight style={styles.button} onPress={() => { onLoadMore() }}>
      <Text>Load More</Text>
    </TouchableHighlight>
  )
}

export default LoadMore;
