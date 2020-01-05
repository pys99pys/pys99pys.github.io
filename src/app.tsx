import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { Global } from '@emotion/core';

import PostStore from 'core/store/postStore';
import { PostItem } from 'core/interface/post';
import { getPosts } from 'core/api/post';
import useFetch from 'core/hooks/useFetch';

import RouteComponents from 'core/routes';
import globalStyles from 'styles/global';

import '@fortawesome/fontawesome-free/js/all';

const { useEffect } = React;
const post = new PostStore();

const App: React.FC = () => {
  const [onRequestPost] = useFetch<PostItem[]>(getPosts, []);

  useEffect(() => {
    (async () => {
      const response = await onRequestPost();
      if (response) {
        post.setPosts(response);
      }
    })();
  }, [onRequestPost]);

  return (
    <>
      <Global styles={globalStyles} />
      <HashRouter>
        <Provider post={post}>
          <RouteComponents />
        </Provider>
      </HashRouter>
    </>
  );
};

export default App;
