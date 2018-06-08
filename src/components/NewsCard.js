import React from 'react';
import { View, StyleSheet, Text, Platform, Linking } from 'react-native';
// import data from '../data/news';

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
      fontSize: 12
    },
    bottomLine: {
      color: '#828282',
      fontSize: 10
    }
});

const NewsCard = ({article, no}) => {

  const getDomainUrl = (url) => {
    if(url) {
      // eslint-disable-next-line
      const domain = url.split(/^https?:\/\/([^\/?#]+)(?:[\/?#]|$)/)[1]
      return domain || 'n/a'
    } else {
      return null
    }
  }

  const openUrl = (url) => {
    if(url !== '' || url !== 'n/a') {
      if(Platform.OS === 'web') {
        window.open(url, '_blank');
      }
      if(Platform.OS === 'android') {
        Linking.openURL(url).catch(error => console.log('error', error));
      }
    }
  }

  return (
    <View style={styles.card}>
      <Text>
        <Text style={styles.title}>{no+1+'. '}</Text>
        <Text style={styles.title} onPress={() => { openUrl(article.url)}}>{article.title+' '}</Text>
        <Text style={styles.url}>{ getDomainUrl(article.url) ? '('+getDomainUrl(article.url)+')' : ''}</Text>
      </Text>
      <Text>
        <Text style={styles.bottomLine}>{article.points+' points by '+article.author}</Text>
        <Text style={styles.bottomLine}>{' | '+article.num_comments+' comments'}</Text>
      </Text>
    </View>
  )
}

export default NewsCard;
