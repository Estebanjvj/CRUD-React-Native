//import React, { useReducer } from 'react';
import createContext from './createDataContext';
import jsonServer from '../api/jsonServer';


//const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch(action.type) {
        case 'get_blog_post':
            return action.payload;
            break;
        case 'add_blog_post':
            return [ ...state, { id: Math.floor(Math.random() * 99999 ), title: `Blog Post #${state.length + 1}`, content:`Some Lorem laconchadelalore ssdsd ${state.length + 1}` } ];
            break;
        case 'del_blog_post':
            return state.filter( blogPost => blogPost.id !== action.payload ) ;
            break;
        case 'add_blog_post_4_real':
            return [ ...state, { id: Math.floor(Math.random() * 99999 ),
                title: action.payload.title,
                content: action.payload.content } ] ;
            break; //add_blog_post_4_real
        case 'edit_blog_post':
            return state.map( blogPost =>{
                console.log(action.payload.id, blogPost)
                return (blogPost.id === action.payload.id) ? action.payload.form : blogPost;
            });
            break; //edit_blog_post
        default:
            return state;
    }
}
const addBlogPost = dispatch => {
    return () => {
        dispatch( {type: 'add_blog_post' });
    };
};

const deleteBlogPost = dispatch => {
    return async (id) => {
        try {
            await jsonServer.delete(`/blogpost/${id}`)
            dispatch( {type: 'del_blog_post', payload: id } )
            if(callback)
                callback();
        } catch (e) {
           console.log("error ",e);
        }
    };
}

const addBlogPost4Real = dispatch => {
    return async (form, callback) => { //async
        try {
            await jsonServer.post('/blogpost',form)
            //dispatch( {type: 'add_blog_post_4_real', payload: form } );
            if(callback)
                callback();
        } catch (e) {
           console.log("error ",e);
        }
    };
}

const editPost = dispatch => {
    return async (id, form, callback) => { //
        try {
            //optional await.post('some', form);
            await jsonServer.put(`/blogpost/${id}`,form);
            console.log("real shit: ",form);
            dispatch( {type: 'edit_blog_post', payload: {id, form} } );
            if(callback)
                callback();
        } catch (e) {
           console.log("error",e);
        }
    };
};

const getBlogPost = dispatch => {
    return async () => {
        try {
            const response = await jsonServer.get('/blogpost')
            .catch(function (error) {
                console.log("Internal error: ",error);
            });;
            //console.log("try",response, response.data);
            dispatch( {type: 'get_blog_post', payload: response.data } );
        } catch (e) {
       //    return e;
            console.log("error",e);
        }
    };
};

/*export const BlogProvider = ( {children} ) => {
    const [blogPosts, dispatch] = useReducer( blogReducer, []);

    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
        {children}
    </BlogContext.Provider>;
};*/

//export default BlogContext;

export const { Context, Provider } = createContext(blogReducer, { addBlogPost, deleteBlogPost, addBlogPost4Real, editPost, getBlogPost }, 
    []);