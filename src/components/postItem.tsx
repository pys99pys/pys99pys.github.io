import * as React from 'react';
import moment from 'moment';
import styled from '@emotion/styled';

import {
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_LIGHT,
  COLOR_MAIN,
  COLOR_BORDER,
  COLOR_GRAY_2,
} from 'styles/variables';
import { PostItem as IPostItem } from 'core/interface/post';
import Tag from 'components/tag';

interface Props {
  item: IPostItem;
  onLinkToDetail: () => void;
}

const PostItemComponent = styled.article`
  padding: 2.25rem 0.5rem;
  border-bottom: 1px solid ${COLOR_BORDER};
  transition: transform 500ms ease;

  h1 {
    margin-top: 1.5rem;
    font-size: 2.25rem;
    font-weight: ${FONT_WEIGHT_BOLD};
    transition: color 500ms ease;
  }

  p {
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    max-height: 4.5rem;
    margin-top: 1rem;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5rem;
    color: ${COLOR_GRAY_2};
  }

  time {
    margin-top: 1rem;
    display: block;
    font-size: 0.825rem;
    font-weight: ${FONT_WEIGHT_LIGHT};
    color: ${COLOR_GRAY_2};
  }

  &:hover {
    transform: translateX(1rem);
    cursor: pointer;

    h1 {
      color: ${COLOR_MAIN};
    }
  }
`;

const PostItem: React.FC<Props> = ({ item, onLinkToDetail }) => (
  <PostItemComponent onClick={onLinkToDetail}>
    {item.tags.split(',').map(tag => (
      <Tag key={tag}>{tag}</Tag>
    ))}
    <h1>{item.subject}</h1>
    <p>{item.content}</p>
    <time>{moment(item.createdAt).format('YYYY년 M월 D일')}</time>
  </PostItemComponent>
);

export default PostItem;
