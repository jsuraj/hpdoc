import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import data from '../data/news';

const styles = StyleSheet.create({
    card: {
      flex: 1,
      justifyContent: 'center',
      padding: 10,
      backgroundColor: '#f6f6ef'
    },
    title: {
      fontWeight: 'bold',
      fontSize: 14
    },
    url: {
      color: '#828282',
      fontSize: '12'
    },
    bottomLine: {
      color: '#828282',
      fontSize: '10'
    }
});

const NewsCard = () => {

  const getDomainUrl = (url) => {
    const domain = url.split(/^https?:\/\/([^\/?#]+)(?:[\/?#]|$)/)[1]
    return domain || 'n/a'
  }

  return (
    <View style={styles.card}>
      <Text>
        <Text style={styles.title}>{data.title+' '}</Text>
        <Text style={styles.url}>{'( '+getDomainUrl(data.url)+' )'}</Text>
      </Text>
      <Text>
        <Text style={styles.bottomLine}>{data.points+' points by '+data.author}</Text>
        <Text style={styles.bottomLine}>{' | '+data.num_comments+' comments'}</Text>
      </Text>
    </View>
  )
}

export default NewsCard;
