import React from 'react';
import { Role } from '@/Enum/Role';

export type UserData = {
  id: number;
  first_name: string;
  last_name: string;
  tel: string;
  email: string;
  birthday: string;
  credit_card_num: string;
  national_id: string;
  profile_pic_url: string;
  profile_pic_fileId: string;
  role: Role;
};

export type ApiUserAuth = {
  tel: string;
  login: string;
  password: string;
  repeatPass: string;
};

export type ApiResetPassword = {
  oldPass: string;
  newPass: string;
  repeatNewPass: string;
};
