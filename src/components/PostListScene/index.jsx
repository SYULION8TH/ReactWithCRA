import React, { useEffect, useState } from "react";
import axios from "axios";

import "./scss/PostList.scss";

import PostListItem from "./PostListItem";

const PostListScene = () => {
    // 1. 데이터를 불러옵니다
    const [posts, setPosts] = useState([]);
    const fetch = async () => {
        const response = await axios({
            method: "get",
            url: "https://koreanjson.com/posts",
        });

        // console.log(response.data);
        setPosts(response.data);
    };

    useEffect(() => {
        fetch();
    }, []);

    // 2. 데이터를 배치할 HTML을 구성합니다
    // 3. HTML을 꾸밉니다
    return (
        <div className='post-list-container'>
            {posts.map((item, idx) => {
                return <PostListItem key={idx} post={item} />;
            })}
        </div>
    );
};

export default PostListScene;
