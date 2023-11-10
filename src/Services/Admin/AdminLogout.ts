import { adminRequest } from '@/Services/HttpConfig';

const AdminLogout = async () => {
  return await adminRequest.post('/logout');
};

export default AdminLogout;
