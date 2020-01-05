import * as React from 'react';
import styled from '@emotion/styled';

const LoadingComponent = styled.div<{ loading: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: white;

  span {
    font-size: 3.5rem;
    animation: spin 1.5s infinite linear;
  }

  p {
    margin-top: 2.5rem;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

interface Props {
  loading?: boolean;
  message: string;
}

const Loading: React.FC<Props> = ({ loading = true, message }) => (
  <LoadingComponent loading={loading}>
    <span>
      <i className="fa fa-sync" />
    </span>
    <p>{message}</p>
  </LoadingComponent>
);

export default Loading;
