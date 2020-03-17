import React, { Component } from "react";
// import axios from "axios";
import axios from '../../axios';

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";
import post from "../../components/Post/Post";

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    authors: {
      1: "Peter",
      2: "John",
      3: "Martin",
      4: "Steven"
    },
    error: false
  };

  componentDidMount() {
    const httpGet = async () => {
      let response;
      try {
        response = await axios.get(
          "/posts"
        );
        const updatedPosts = response.data.map(post => ({
          ...post,
          author: this.state.authors[post.userId]
        }));
        this.setState({ posts: updatedPosts });
      } catch (error) {
        this.setState({error: true})
      }
    };
    httpGet();
  }

  postClicked(id) {
    console.log(id);
    this.setState({ selectedPostId: id });
  }

  populatePosts = () => {
    if(this.state.error) return "Something went wrong";
    if (this.state.posts.length === 0) return "No posts";
    return this.state.posts.map(post => (
      <Post
        clicked={this.postClicked.bind(this)}
        key={post.id}
        id={post.id}
        title={post.title}
        author={post.author}
      />
    ));
  };

  render() {
    return (
      <div>
        <section className="Posts">{this.populatePosts()}</section>
        <section>
          <FullPost postId={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
