import React from "react";
import { View, StyleSheet, ActivityIndicator, ScrollView, Platform } from "react-native";
import axios from 'axios';

import AppBar from '../components/AppBar';
import NewsCard from '../components/NewsCard';
import LoadMore from '../components/LoadMore';
import Footer from '../components/Footer';

const styles = StyleSheet.create({
  body: {
    flex: 1
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center'
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

  loadMore = () => {
    console.log('loadMore called');
    this.setState({loaded: false});
    let page = this.state.page + 1;
    let url = `https://hn.algolia.com/api/v1/search_by_date?tags=front_page&page=${page}`;
    axios.get(url)
    .then((response) => {
      const previousItems = this.state.newsItems;
      this.setState({
        newsItems: [...previousItems, ...response.data.hits],
        loaded: true,
        page: page
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <View>
        <AppBar />
        { (!this.state.loaded && this.state.newsItems.length===0) ? <ActivityIndicator /> :
          <ScrollView>
            <View style={styles.body}>
              {
                this.state.newsItems.map((article, i) => <NewsCard key={Math.random()} article={article} no={i} />)
              }
              <View style={styles.buttonContainer}>
                {!this.state.loaded ? <ActivityIndicator/> :
                  <LoadMore onLoadMore={this.loadMore}/>
                }
              </View>
            </View>
            {(Platform.OS === 'android') &&
              <Footer/>
            }
          </ScrollView>
        }
      </View>
    )
  }
}
