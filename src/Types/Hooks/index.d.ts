import React from 'react';
import { Routes } from '@/Enum/Routes';
import { Role } from '@/Enum/Role';

declare global {
  type Menus = {
    id: number;
    href: Routes;
    label: string;
    role: Role;
    Icon?: HugeIcons;
  };
}

export type UseRequest = {
  redirectSuccess?: string;
};

export {};
