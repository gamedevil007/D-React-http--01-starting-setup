import React,{ Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import FullPost from '../../../containers/Blog/FullPost/FullPost';
import {Route} from 'react-router-dom';
import './Posts.css';
import {Link} from 'react-router-dom';
class Posts extends Component{
    state={
        posts:[]
    }

    postSelectedHandler=(id)=>{
        this.props.history.push({pathname:'/'+id});
    }

    componentDidMount(){
        axios.get('/posts')
        .then((response)=>{
            const posts=response.data.slice(0,4);
            const updatedPosts = posts.map(post=>{
                return {
                    ...post,
                    author:'Max'
                }
            })
            this.setState({posts:updatedPosts});
        }).catch(error=>{
            this.setState({error:true});
        });
    }

    render(){
        let posts=<p style={{textAlign:'center'}}>Something went wrong</p>
        if(!this.state.error){
            posts=this.state.posts.map(post=>{
                // return <Link key={post.id} to={'/'+post.id}><Post 
                // title={post.title} 
                // author={post.author}
                // clicked={()=>this.postSelectedHandler(post.id)}/>
                // </Link>
                return <Post
                key={post.id} 
                title={post.title} 
                author={post.author}
                clicked={()=>this.postSelectedHandler(post.id)}/>
            });
        }

        return(
        <div>
            <section className="Posts">
                {posts}
            </section>
            <Route path="/:id" exact component={FullPost}/>
        </div>
        );
    }
}

export default Posts;