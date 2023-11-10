import { Http } from '@/Services/HttpConfig';
import { ApiResetPassword } from '@/Types/Services';

const UserUpdate = async ({ newPass, oldPass, repeatNewPass }: ApiResetPassword) => {
  return await Http.put('/user/resetPass', {
    newPass,
    oldPass,
    repeatNewPass,
  });
};
export default UserUpdate;
