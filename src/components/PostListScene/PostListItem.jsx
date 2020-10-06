import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import "./scss/PostListItem.scss";

const PostListItem = ({ post }) => {
    return (
        <div className='post-item-container'>
            <Link to={`/posts/${post.id}`} className='title'>
                {post.title}
            </Link>
            <p className='created-date'>
                작성일 : {moment(post.createdAt).format("YYYY-MM-DD HH:mm:ss")}
            </p>
        </div>
    );
};

export default PostListItem;
