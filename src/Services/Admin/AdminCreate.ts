import { adminRequest } from '@/Services/HttpConfig';

const AdminCreate = async value => {
  return await adminRequest.post('/create', value);
};

export default AdminCreate;
