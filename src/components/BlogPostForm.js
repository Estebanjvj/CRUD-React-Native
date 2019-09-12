import React, { useReducer } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const reducer = (state, action) => {
    switch( action.type )
    {
        case 'setTitle':
            state.title = action.payload;
            break;
        case 'setContent':
            state.content = action.payload;
            break;
        default:
            break;
    }
    //console.log(state, action);
    return  {...state, title: state.title, content: state.content };
};

const BlogPostForm = ( { onSubmit, initPost } ) => {

    const [form, dispatch] = useReducer(reducer, initPost);

    return (
        <View style={styles.container}>
            <Text>Título </Text>
            <TextInput style={styles.input} value={form.title} onChangeText={(text) => dispatch({ type: 'setTitle', payload: text}) } />
  
            <Text>Contenido </Text>
            <TextInput style={styles.input}  value={form.content} onChangeText={(text) => dispatch({ type: 'setContent', payload: text}) } />
  
            <Button title='Agregar' 
            onPress={ 
                ()=> onSubmit(form) } />
        </View>
    );
};
//()=> addBlogPost4Real(form, ()=> {
//    navigation.navigate('Index');
//})

BlogPostForm.defaultProps = {
    initPost: { title: '', content: ''}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'center',
      },
      input: {
        margin: 15,
        padding: 0,
        paddingLeft: 5,
        paddingRight: 5,
        borderColor: '#555',
        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: '#fff'
      }
});

export default BlogPostForm;
