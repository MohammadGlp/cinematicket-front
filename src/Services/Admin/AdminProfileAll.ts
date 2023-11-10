import { adminRequest } from '@/Services/HttpConfig';

const AdminProfileAll = async () => {
  return await adminRequest.get('/profile/all');
};

export default AdminProfileAll;
