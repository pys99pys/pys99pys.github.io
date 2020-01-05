import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { POSTS } from 'core/consts/path';
import {
  SIZE_ASIDE_WIDTH,
  FONT_WEIGHT_BOLD,
  COLOR_BLACK,
  COLOR_GRAY_2,
  COLOR_GRAY_3,
  COLOR_GRAY_4,
  COLOR_MAIN,
} from 'styles/variables';

interface Props {
  showAside: boolean;
  tags: { [key: string]: number };
  onToggleAside: () => void;
}

const AsideComponent = styled.aside<{ active: boolean }>`
  width: 0;
  position: relative;
  z-index: 100;
  overflow: hidden;
  transition: width 500ms ease;

  ${({ active }) =>
    active &&
    css`
      width: ${SIZE_ASIDE_WIDTH + 50}px;
    `}

  .wrap {
    width: ${SIZE_ASIDE_WIDTH}px;
    height: 100%;
    padding: 2.5rem;
    background-color: ${COLOR_GRAY_4};

    button {
      position: absolute;
      top: 1rem;
      left: calc(${SIZE_ASIDE_WIDTH}px + 1rem);
      border: none;
      background-color: transparent;
      font-size: 1.5rem;
      color: ${COLOR_GRAY_2};
      transition: color 500ms ease;

      &:hover {
        color: ${COLOR_BLACK};
        cursor: pointer;
      }
    }

    h1 {
      font-size: 1.25rem;
      font-weight: ${FONT_WEIGHT_BOLD};
    }

    ul {
      margin-top: 1.25rem;

      li a {
        margin: 0.5rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
        color: ${COLOR_GRAY_2};
        transition: color 500ms ease;

        span {
          width: 1.75rem;
          height: 1.75rem;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          background-color: ${COLOR_GRAY_3};
          font-size: 0.775rem;
          color: white;
          transition: background-color 500ms color 500ms ease;
        }

        &:hover {
          color: ${COLOR_BLACK};
          cursor: pointer;
        }

        &.active {
          color: ${COLOR_BLACK};

          span {
            background-color: ${COLOR_MAIN};
          }
        }
      }
    }
  }
`;

const Aside: React.FC<Props> = ({ showAside, tags, onToggleAside }) => {
  const { tag: tagParam } = useParams();

  return (
    <AsideComponent active={showAside}>
      <div className="wrap">
        <button onClick={onToggleAside}>
          <i className="fa fa-times" />
        </button>
        <h1>태그 목록</h1>
        <ul>
          {Object.keys(tags).map(tag => (
            <li key={tag}>
              <Link
                to={POSTS + tag}
                className={
                  (!tagParam && tag === 'All') ||
                  tagParam?.toLowerCase() === tag.toLowerCase()
                    ? 'active'
                    : ''
                }
              >
                {tag}
                <span>{tags[tag]}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </AsideComponent>
  );
};

export default Aside;
