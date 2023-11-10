import { adminRequest } from '@/Services/HttpConfig';

const AdminResetPass = async value => {
  return await adminRequest.put('/resetPass', value);
};

export default AdminResetPass;
