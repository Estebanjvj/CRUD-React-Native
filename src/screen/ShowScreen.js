import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContest';
import { Feather } from '@expo/vector-icons';

const ShowScreen = ( {navigation} ) => {
    const id = navigation.getParam('id');
    const { state } = useContext(BlogContext);

    const blogPost = state.find(
        blogPost => blogPost.id === navigation.getParam('id')
    );
    console.log(blogPost);
    return (<View style={styles.container}>
      <Text style={styles.textId}>{blogPost.id}</Text>
      <Text style={styles.textTitle}>{blogPost.title}</Text>
      <Text style={styles.textSubtitle}>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ( {navigation} ) => {
  return {
    headerRight: <TouchableOpacity onPress={ ()=> navigation.navigate('Edit', {id: navigation.getParam('id')})} >
      <Feather name='edit' size={30} style={{fontSize:25, marginRight: 10}} />
    </TouchableOpacity>
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontSize:18,
    color: 'black',
    fontWeight: 'bold'
  },
  textSubtitle: {
    fontSize:14,
  },
  textId:{
    color: '#4F5',
    fontSize:25,
    fontWeight: 'bold'
  }
});

export default  ShowScreen;
