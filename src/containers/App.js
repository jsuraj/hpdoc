import React from "react";
import { View, StyleSheet, Text, ActivityIndicator, ScrollView } from "react-native";
import axios from 'axios';
import AppBar from '../components/AppBar';
import NewsCard from '../components/NewsCard';

const styles = StyleSheet.create({
  body: {
    flex : 1,
  }
});

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      newsItems: [],
      loaded: false
    }
  }

  componentDidMount() {
    let page = this.state.page;
    axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=front_page&page=${page}`)
    .then((response) => {
      console.log(response);
      this.setState({
        newsItems: response.data.hits,
        loaded: true
      });
    })
    .catch((error) => {
      console.log(error)
    });
  }

  render() {
    return (
      <View>
        <AppBar />
        { !this.state.loaded ? <ActivityIndicator /> :
          <ScrollView>
            <View style={styles.body}>
              {
                this.state.newsItems.map((article, i) => <NewsCard key={Math.random()} article={article} no={i}/>)
              }
            </View>
          </ScrollView>
        }
      </View>
    )
  }
}
