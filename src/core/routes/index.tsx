import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as PATH from 'core/consts/path';
import PostPage from 'pages/postPage';
import PostsPage from 'pages/postsPage';

const RouteComponents = () => (
  <Switch>
    <Route path={`${PATH.POST}/:id`} component={PostPage} />
    <Route path={`${PATH.POSTS}:tag?`} component={PostsPage} />
  </Switch>
);

export default RouteComponents;
