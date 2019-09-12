import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContest';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ( {navigation} ) => {
    const { state, editPost } = useContext(Context);
    const id = navigation.getParam('id');

    const blogPost = state.find(
        blogPost => blogPost.id === id
    );

    console.log(id, blogPost);
    const curr = blogPost || {title: '', content: ''}

    return <BlogPostForm 
        initPost={blogPost}
        onSubmit={ (form)=> {
          editPost(id, form, ()=> navigation.pop() );
        }
    } />;
};

const styles = StyleSheet.create({});

export default  EditScreen;
