import * as React from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react';

import { PostItem as IPostItem } from 'core/interface/post';
import useStore from 'core/hooks/useStore';
import Layout from 'containers/layoutContainer';
import PostDetail from 'components/postDetail';

const { useMemo } = React;

const PostPage: React.FC = observer(() => {
  const store = useStore();
  const { id } = useParams();

  const item = useMemo(
    () =>
      (store.post.posts as IPostItem[]).find(
        ({ id: postId }) => postId === Number(id),
      ),
    [id, store.post.posts],
  );

  return <Layout>{item ? <PostDetail item={item} /> : null}</Layout>;
});

export default PostPage;
