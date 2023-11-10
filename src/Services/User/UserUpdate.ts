import { Http } from '@/Services/HttpConfig';

const UserUpdate = async values => {
  return await Http.put('/user/update', values, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
export default UserUpdate;
