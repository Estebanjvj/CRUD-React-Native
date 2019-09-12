import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContest';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
    const { state, deleteBlogPost } = useContext(BlogContext);
    return (<View style={styles.container}>
      
      <FlatList
        data={state}
        keyExtractor={(blogPosts) => blogPosts.title }
        renderItem={({item}) => {
            return (<TouchableOpacity onPress={ ()=> navigation.navigate('Show', { id:item.id } ) } >
              <View style={styles.item}>
                <Text style={{fontSize:18}} >{item.title} - {item.id} </Text>
                <TouchableOpacity onPress={ ()=> deleteBlogPost(item.id)} >
                  <Feather style={{fontSize:20}} name='trash' />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>)
        }} />
    </View>
  );
};
//<Button title='Add post alv' onPress={addBlogPost} />
IndexScreen.navigationOptions = ( {navigation} ) => {
  return {
    headerRight: <TouchableOpacity onPress={ ()=> navigation.navigate('Create')} >
      <Feather name='plus-square' size={30} style={{fontSize:25, marginRight: 10}} />
    </TouchableOpacity>
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderTopWidth: 1,
    borderColor: 'gray'
  }
});

export default  IndexScreen;
