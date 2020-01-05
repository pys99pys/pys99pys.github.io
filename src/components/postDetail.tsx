import * as React from 'react';
import moment from 'moment';
import styled from '@emotion/styled';

import {
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_LIGHT,
  COLOR_BORDER,
  COLOR_GRAY_2,
} from 'styles/variables';
import { PostItem as IPostItem } from 'core/interface/post';
import Tag from 'components/tag';
import MarkdownContent from 'components/markdownContent';

const PostDetailComponent = styled.div`
  .header {
    padding: 2rem 0;
    border-bottom: 1px solid ${COLOR_BORDER};

    h1 {
      margin-top: 1.5rem;
      font-size: 3rem;
      font-weight: ${FONT_WEIGHT_BOLD};
    }

    time {
      margin-top: 1.5rem;
      display: block;
      font-size: 0.825rem;
      font-weight: ${FONT_WEIGHT_LIGHT};
      color: ${COLOR_GRAY_2};
    }
  }

  .content {
    margin-top: 2.5rem;
    line-height: 1.5rem;

    code {
      font-family: 'Nanum Gothic Coding', monospace;
    }
  }
`;

interface Props {
  item: IPostItem;
}

const PostDetail: React.FC<Props> = ({ item }) => (
  <PostDetailComponent>
    <div className="header">
      {item.tags.split(',').map(tag => (
        <Tag key={tag}>{tag}</Tag>
      ))}
      <h1>{item.subject}</h1>
      <time>{moment(item.createdAt).format('YYYY년 M월 D일')}</time>
    </div>
    <div className="content">
      <MarkdownContent content={item.content} />
    </div>
  </PostDetailComponent>
);

export default PostDetail;
