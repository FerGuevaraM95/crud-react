import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert2'

import Header from './Header';
import Navigation from './Navigation';
import Posts from './Posts';
import SinglePost from './SinglePost';
import Form from './Form';

class Router extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.getPost();
    }

    getPost = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                this.setState({
                    posts: res.data
                })
            })
    }

    deletePost = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                if (res.status === 200) {
                    const posts = [...this.state.posts];
                    let result =posts.filter(post => (
                        post.id != id
                    ));
                    this.setState({
                        posts: result
                    })
                }
            })
    }

    createPost = (post) => {
        axios.post(`https://jsonplaceholder.typicode.com/posts/`, {post})
            .then(res => {
                if(res.status === 201) {
                    swal(
                        'Post Creado',
                        'Se creó correctamente',
                        'success'
                    )
                    let postId = {id: res.data.id};
                    const newPost = Object.assign({}, res.data.post, postId);

                    this.setState(prevState =>({
                        posts: [...prevState.posts, newPost]
                    }))
                }
            })
    }

    render() { 
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="row justify-content-center">
                        <Header/>
                        <Navigation/>
                        <Switch>
                            <Route exact path="/" render={ () =>{
                                return(
                                    <Posts
                                        posts={this.state.posts}
                                        deletePost={this.deletePost}
                                    />
                                )
                            }}
                            />
                            <Route exact path="/post/:postId" render={ (props) => {
                                let idPost = props.location.pathname.replace('/post/', '');

                                const posts = this.state.posts;

                                let filterPost;
                                filterPost = posts.filter(post => (
                                    post.id === Number(idPost)
                                ))

                                return (
                                    <SinglePost
                                        post={filterPost[0]}
                                    />
                                )
                            } }
                            />
                            <Route exact path="/create" render={() => {
                                return (
                                    <Form
                                        createPost={this.createPost}
                                    />
                                )
                            }}
                            />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
 
export default Router;