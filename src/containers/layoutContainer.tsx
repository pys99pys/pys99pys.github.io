import * as React from 'react';
import { observer } from 'mobx-react';

import { PostItem as IPostItem } from 'core/interface/post';
import useStore from 'core/hooks/useStore';
import Layout from 'components/layout';

const { useState, useMemo, useCallback } = React;

const LayoutContainer: React.FC = observer(({ children }) => {
  const store = useStore();

  const [showAside, setShowAside] = useState(false);

  const tags = useMemo(() => {
    const allItems = store.post.posts as IPostItem[];
    const computedTags: { [key: string]: number } = {
      All: allItems.length,
    };
    allItems.forEach(({ tags }) => {
      tags.split(',').forEach(tag => {
        computedTags[tag] = (computedTags[tag] || 0) + 1;
      });
    });
    return computedTags;
  }, [store.post.posts]);

  const onToggleAside = useCallback(() => setShowAside(!showAside), [
    showAside,
  ]);

  return (
    <Layout showAside={showAside} tags={tags} onToggleAside={onToggleAside}>
      {children}
    </Layout>
  );
});

export default LayoutContainer;
