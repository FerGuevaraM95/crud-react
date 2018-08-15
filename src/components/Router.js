import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from './Header';
import Navigation from './Navigation';
import Posts from './Posts';
import SinglePost from './SinglePost';

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
                                    />
                                )
                            }}
                            />
                            <Route exact path="/post/:postId" render={ (props) => {
                                let idPost = props.location.pathname.replace('/post/', '');

                                const posts = this.state.posts;

                                let filterPost;
                                filterPost = posts.filter(post => (
                                    post.id == idPost
                                ))

                                return (
                                    <SinglePost
                                        post={filterPost[0]}
                                    />
                                )
                            } }
                            />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
 
export default Router;