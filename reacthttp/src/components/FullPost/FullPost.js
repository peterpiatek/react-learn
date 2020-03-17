import React, { Component } from "react";

import "./FullPost.css";
import Axios from "axios";

class FullPost extends Component {
  state = {
    loadedPost: null
  };

  componentDidUpdate() {
    const fetchPosts = async () => {
      const fetchedPost = await Axios.get(
        "/posts/" + this.props.postId
      );
      this.setState({loadedPost: fetchedPost.data})
    };

    if (this.props.postId) {
      if (
        !this.state.loadedPost ||
        this.props.postId !== this.state.loadedPost.id
      ) {
        fetchPosts();
      }
    }
  }

  render() {
    let post = <p>Please select a Post!</p>;
    if (this.props.postId) {
      post = <p>Loading...</p>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete">Delete</button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
