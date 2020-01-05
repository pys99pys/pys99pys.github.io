import * as React from 'react';
import { RouteComponentProps, withRouter, useParams } from 'react-router-dom';
import { observer } from 'mobx-react';

import { POST as POST_PAGE } from 'core/consts/path';
import { PostItem as IPostItem } from 'core/interface/post';
import useStore from 'core/hooks/useStore';
import Layout from 'containers/layoutContainer';
import PostItem from 'components/postItem';

const { useMemo, useCallback } = React;

const PostsPage: React.FC<RouteComponentProps> = observer(({ history }) => {
  const store = useStore();
  const { tag } = useParams();

  const onLinkToDetail = useCallback(
    id => {
      history.push(`${POST_PAGE}/${id}`);
    },
    [history],
  );

  const items = useMemo(() => {
    const allItems = store.post.posts as IPostItem[];
    const filterdItems =
      !tag || tag === 'All'
        ? allItems
        : allItems.filter(
            ({ tags }) =>
              tags
                .toLowerCase()
                .split(',')
                .indexOf(tag.toLowerCase()) !== -1,
          );
    return filterdItems.map(
      item => (
        <PostItem
          key={item.id}
          item={item}
          onLinkToDetail={() => onLinkToDetail(item.id)}
        />
      ),
      [tag, onLinkToDetail],
    );
  }, [tag, store.post.posts, onLinkToDetail]);

  return <Layout>{items}</Layout>;
});

export default withRouter(PostsPage);
