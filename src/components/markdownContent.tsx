import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from '@emotion/styled';

interface Props {
  content: string;
}

const MarkdownContentComponent = styled.div`
  font-size: 15px;
  line-height: 1.5em;

  > *:first-child {
    margin-top: 0 !important;
  }

  > *:last-child {
    margin-bottom: 0 !important;
  }

  a {
    color: #4183c4;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  a.absent {
    color: #cc0000;
  }

  a.anchor {
    display: block;
    margin-left: -2em;
    padding-left: 2em;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 2em 0 1em;
    padding: 0;
    position: relative;
    font-weight: 900;
  }

  h1:first-child,
  h1:first-child + h2,
  h2:first-child,
  h3:first-child,
  h4:first-child,
  h5:first-child,
  h6:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  h1:hover a.anchor,
  h2:hover a.anchor,
  h3:hover a.anchor,
  h4:hover a.anchor,
  h5:hover a.anchor,
  h6:hover a.anchor {
    text-decoration: none;
  }

  h1 tt,
  h1 code,
  h2 tt,
  h2 code,
  h3 tt,
  h3 code,
  h4 tt,
  h4 code,
  h5 tt,
  h5 code,
  h6 tt,
  h6 code {
    font-size: inherit;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.85em;
  }

  h3 {
    font-size: 1.7em;
  }

  h4 {
    font-size: 1.5em;
  }

  h5 {
    font-size: 1.25em;
  }

  h6 {
    font-size: 1em;
  }

  h1 p,
  h2 p,
  h3 p,
  h4 p,
  h5 p,
  h6 p {
    margin-top: 0;
  }

  li p.first {
    display: inline-block;
  }

  ul,
  ol {
    padding-left: 2.25em;
  }

  p,
  blockquote,
  ul,
  ol,
  dl,
  li,
  table,
  pre {
    margin: 1.25em 0;
  }

  hr {
    height: 4px;
    padding: 0;
    border: none;
    color: #cccccc;
  }

  ul :first-child,
  ol :first-child {
    margin-top: 0;
  }

  ul :last-child,
  ol :last-child {
    margin-bottom: 0;
  }

  dl {
    padding: 0;
  }

  dl dt {
    font-weight: 900;
    font-style: italic;
    padding: 0;
    margin: 1.25em 0 0.75em;
  }

  dl dt:first-child {
    padding: 0;
  }

  dl dt > :first-child {
    margin-top: 0;
  }

  dl dt > :last-child {
    margin-bottom: 0;
  }

  dl dd {
    margin: 0 0 1.25em;
    padding: 0 1.25em;
  }

  dl dd > :first-child {
    margin-top: 0;
  }

  dl dd > :last-child {
    margin-bottom: 0;
  }

  blockquote {
    border-left: 4px solid #ddd;
    padding: 0 1.25em;
    color: #888;
  }

  blockquote > :first-child {
    margin-top: 0;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }

  table {
    padding: 0;
  }

  table tr {
    margin: 0;
    padding: 0;
    border-top: 1px solid #cccccc;
    background-color: white;
  }

  table tr:nth-child(2n) {
    background-color: #f2f2f2;
  }

  table tr th {
    margin: 0;
    padding: 0.75em;
    border: 1px solid #cccccc;
    font-weight: 900;
    text-align: left;
  }

  table tr td {
    margin: 0;
    padding: 0.5em;
    border: 1px solid #cccccc;
    text-align: left;
  }

  table tr th :first-child,
  table tr td :first-child {
    margin-top: 0;
  }

  table tr th :last-child,
  table tr td :last-child {
    margin-bottom: 0;
  }

  img {
    max-width: 100%;
  }

  strong {
    font-weight: 900;
  }

  span.frame {
    display: block;
    overflow: hidden;
  }

  span.frame > span {
    width: auto;
    margin: 1em 0 0;
    padding: 0.75em;
    display: block;
    float: left;
    border: 1px solid #dddddd;
    overflow: hidden;
  }

  span.frame span img {
    display: block;
    float: left;
  }

  span.frame span span {
    display: block;
    padding: 0.75em 0 0;
    clear: both;
    color: #333333;
  }

  span.align-center {
    display: block;
    overflow: hidden;
    clear: both;
  }

  span.align-center > span {
    margin: 1em auto 0;
    display: block;
    overflow: hidden;
    text-align: center;
  }

  span.align-center span img {
    margin: 0 auto;
    text-align: center;
  }

  span.align-right {
    display: block;
    overflow: hidden;
    clear: both;
  }

  span.align-right > span {
    margin: 1em 0 0;
    display: block;
    overflow: hidden;
    text-align: right;
  }

  span.align-right span img {
    margin: 0;
    text-align: right;
  }

  span.float-left {
    margin-right: 1em;
    display: block;
    overflow: hidden;
    float: left;
  }

  span.float-left span {
    margin: 1em 0 0;
  }

  span.float-right {
    margin-left: 1em;
    display: block;
    overflow: hidden;
    float: right;
  }

  span.float-right > span {
    margin: 1em auto 0;
    display: block;
    overflow: hidden;
    text-align: right;
  }

  code,
  tt {
    margin: 0 0.2em;
    padding: 0.2em 0.5em;
    border-radius: 0.1em;
    background-color: #f2f2f2;
    font-size: 0.95em;
    white-space: nowrap;
  }

  pre {
    padding: 1em;
    background-color: #f2f2f2;
    border-radius: 0.1em;
    overflow: auto;
    font-size: 0.95em;
    line-height: 1.35em;
  }

  pre code,
  pre tt {
    background-color: transparent;
    border: none;
  }

  pre code {
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
    white-space: pre;
  }
`;

const MarkdownContent: React.FC<Props> = ({ content }) => (
  <MarkdownContentComponent>
    <ReactMarkdown source={content} />
  </MarkdownContentComponent>
);

export default MarkdownContent;
