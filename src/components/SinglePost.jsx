import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { fetchPosts } from "../api";

const SinglePost = (props) => {
    const posts = props.posts
    const setPosts = props.setPosts
    let { postID } = useParams()

    const getPosts = async () => {
        const data = await fetchPosts();
        setPosts(data);
      };
    
      useEffect(() => {
        getPosts();
      }, []);
    
    return(
        <div>
            <h1>Test</h1>
        </div>
    )
}

export default SinglePost