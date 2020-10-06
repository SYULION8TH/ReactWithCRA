import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import MainScene from "./components/MainScene";
import PostListScene from "./components/PostListScene";
import PostDetailScene from "./components/PostDetailScene";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path='/' component={MainScene} />
                <Route exact path='/posts' component={PostListScene} />
                <Route path='/posts/:postId' component={PostDetailScene} />
                <Route path='*'>
                    <p>404 not found</p>
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
