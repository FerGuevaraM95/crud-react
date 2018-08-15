import React, { Component } from 'react';

import List from '../List';

class Posts extends Component {
    state = {  }
    render() { 
        return (
            <div className="col-12 col-md-8">
                <h2 className="text-center">Posts</h2>
                <List
                    posts={this.props.posts}
                    deletePost={this.props.deletePost}
                />
            </div>
        );
    }
}
 
export default Posts;