import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { POSTS } from 'core/consts/path';
import { COLOR_GRAY_2, COLOR_MAIN, COLOR_BORDER } from 'styles/variables';

const TagComponent = styled.span`
  a {
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 1px;
    background-color: ${COLOR_BORDER};
    font-size: 0.775rem;
    text-decoration: none;
    color: ${COLOR_GRAY_2};
    transition: background-color 500ms, color 500ms ease;

    &:hover {
      background-color: ${COLOR_MAIN};
      color: white;
      cursor: pointer;
    }
  }
`;

const Tag: React.FC = ({ children }) => (
  <TagComponent>
    <Link
      to={POSTS + children?.toString()}
      onClick={e => {
        e.stopPropagation();
      }}
    >
      {children}
    </Link>
  </TagComponent>
);

export default Tag;
