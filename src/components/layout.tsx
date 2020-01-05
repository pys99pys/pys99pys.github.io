import * as React from 'react';
import styled from '@emotion/styled';

import { SIZE_CONTAINER_WIDTH } from 'styles/variables';
import MenuButton from 'components/menuButton';
import Header from 'components/header';
import Aside from 'components/aside';

interface Props {
  showAside: boolean;
  tags: { [key: string]: number };
  onToggleAside: () => void;
}

const LayoutComponent = styled.div`
  height: 100vh;
  display: flex;

  .container {
    flex: 1;

    > main {
      width: ${SIZE_CONTAINER_WIDTH}px;
      margin: 0 auto;
      padding-bottom: 10rem;
    }
  }
`;

const Layout: React.FC<Props> = ({
  showAside,
  tags,
  onToggleAside,
  children,
}) => (
  <LayoutComponent>
    <MenuButton onToggleAside={onToggleAside} />
    <Aside showAside={showAside} tags={tags} onToggleAside={onToggleAside} />
    <div className="container">
      <Header />
      <main>{children}</main>
    </div>
  </LayoutComponent>
);

export default Layout;
