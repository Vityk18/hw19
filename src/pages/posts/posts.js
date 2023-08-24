import React from "react";
import {postsList} from "../../constants/posts";
import Post from "../../components/post/post";

export default function Posts() {
    return (
        <div>
            {postsList.map(({content}) => (
                <Post content={content}/>
            ))}
        </div>
    );
}
