import { adminRequest } from '@/Services/HttpConfig';

const AdminProfilePicUpload = async file => {
  return await adminRequest.put('/profilePic/upload', {
    img: file,
  });
};

export default AdminProfilePicUpload;
