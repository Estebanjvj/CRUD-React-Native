import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContest';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ( {navigation} ) => {
    const { addBlogPost4Real } = useContext(Context);

    return <BlogPostForm 
        onSubmit={ (form)=> {
            addBlogPost4Real(form, ()=> navigation.navigate('Index') );
        }
    } />;
};

const styles = StyleSheet.create({});

export default CreateScreen;
