import React, { ReactNode } from 'react';

declare global {
  type Button = React.ButtonHTMLAttributes<any>;

  type ButtonIcon = {
    Icon?: HugeIcons;
    Img?: string;
    text: string;
    color?: string;
    responsive?: boolean;
    backgroundColor?: string;
  };

  type DropDown = {
    title: string;
    Icon: Icon;
    Image: string;
  };

  type Submitter = {
    submitter: (values: {}) => void;
  };

  type DashboardLayout = {
    children: ReactNode;
    bgColor: string;
  };
}
export type MenuItemProps = {
  Icon?: HugeIcons;
  label: string;
  active?: boolean;
  onClick?: () => void;
};
export type LogoutDialogProps = {
  isOpen: boolean;
  closeModal: () => void;
};
export type DialogModalProps = {
  title: string;
  isOpen: boolean;
  closeModal: () => void;
};
