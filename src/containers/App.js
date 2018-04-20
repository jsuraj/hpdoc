import React from "react";
import { View, Text } from "react-native";
import AppBar from '../components/AppBar';
import NewsCard from '../components/NewsCard';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppBar />
        <NewsCard />
      </View>
    )
  }
}
