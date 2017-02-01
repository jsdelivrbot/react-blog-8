import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

// const Greeting = () => {
//   return <div>Hey there!</div>;
// };

export default (
  // on root, show app
  <Route path="/" component={App}>
    {/* if the route is "/" show app and show postIndex */}
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={PostsNew} />
  </Route>
);
