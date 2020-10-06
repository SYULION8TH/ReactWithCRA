import React, { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";
import "./scss/PostDetail.scss";

const PostDetailScene = ({ match }) => {
    const { postId } = match.params;
    const [post, setPost] = useState(null);
    const [user, setUser] = useState(null);
    const fetchPost = async (_postId) => {
        const response = await axios({
            method: "get",
            url: "https://koreanjson.com/posts/" + _postId,
        });

        setPost(response.data);
    };

    const fetchUser = async (_userId) => {
        const response = await axios({
            method: "get",
            url: "https://koreanjson.com/users/" + _userId,
        });
        setUser(response.data);
    };

    useEffect(() => {
        fetchPost(postId);
    }, [postId]);

    useEffect(() => {
        if (post) {
            fetchUser(post.UserId);
        }
    }, [post]);

    return (
        <div className='post-detail-container'>
            <p>{post?.title}</p>
            <div>
                <p>작성자 : {user?.username}</p>
                <p>
                    작성일 :
                    {moment(post?.createdAt).format("YYYY-MM-DD HH:MM:ss")}
                </p>
            </div>
            <div>
                <p>{post?.content}</p>
            </div>
        </div>
    );
};

export default PostDetailScene;
