import * as React from 'react';
import styled from '@emotion/styled';

import {
  SIZE_MENU_BUTTON,
  COLOR_MAIN,
  COLOR_BORDER,
  COLOR_GRAY_3,
} from 'styles/variables';

interface Props {
  onToggleAside: () => void;
}

const MenuButtonComponent = styled.button`
  width: ${SIZE_MENU_BUTTON}px;
  height: ${SIZE_MENU_BUTTON}px;
  align-items: center;
  position: fixed;
  z-index: 99;
  top: 1.25rem;
  left: 1.25rem;
  border: none;
  border-radius: 1px;
  background-color: ${COLOR_BORDER};
  font-size: 1.5rem;
  color: ${COLOR_GRAY_3};
  transition: background-color 500ms, color 500ms ease;

  &:hover {
    background-color: ${COLOR_MAIN};
    color: white;
    cursor: pointer;
  }
`;

const MenuButton: React.FC<Props> = ({ onToggleAside }) => (
  <MenuButtonComponent onClick={onToggleAside}>
    <i className="fa fa-bars" />
  </MenuButtonComponent>
);

export default MenuButton;
