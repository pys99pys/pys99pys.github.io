import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { POSTS } from 'core/consts/path';
import { SIZE_HEADER_HEIGHT, COLOR_MAIN, COLOR_BLACK } from 'styles/variables';

const HeaderComponent = styled.header`
  width: 100%;
  height: ${SIZE_HEADER_HEIGHT}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${COLOR_MAIN};
    font-family: 'Nanum Gothic Coding', monospace;
    font-size: 13px;
    color: white;
    transition: transform 500ms ease;

    &:hover {
      transform: scale(1.125);
      cursor: pointer;
    }
  }

  p {
    margin-top: 1.25rem;
    transition: color 500ms, transform 500ms ease;

    a {
      text-decoration: none;
      color: ${COLOR_BLACK};
      font-size: 0.925rem;
    }

    &:hover {
      transform: scale(1.125);

      a {
        color: ${COLOR_MAIN};
      }
    }
  }
`;

const Header: React.FC = () => (
  <HeaderComponent>
    <span>&lt;ys &#47;&gt;</span>
    <p>
      <Link to={POSTS}>pys99pys 블로그</Link>
    </p>
  </HeaderComponent>
);

export default Header;
