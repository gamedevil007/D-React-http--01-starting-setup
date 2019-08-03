import React, { Component } from 'react';
import {Route,NavLink,Switch,Redirect} from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';
const AsyncNewPost=asyncComponent(()=>{
    return import('./NewPost/NewPost');
});
class Blog extends Component {

    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact activeClassName="active">Posts</NavLink></li>
                            <li><NavLink to={
                                {
                                    pathname:'/new-post'
                                }
                            }>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                <Route path="/new-post" exact component={AsyncNewPost}/>
                <Route path="/" component={Posts}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;