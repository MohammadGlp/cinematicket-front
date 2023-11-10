import UserProfile from '@/Services/User/UserProfile';
import { cookies } from 'next/headers';

export default async function checkAuth(): Promise<boolean> {
  const cookiesList = cookies();

  if (!cookiesList.has('authToken')) return false;

  const cookie = cookiesList.get('authToken');
  try {
    const { data } = await UserProfile({
      Cookie: `${cookie?.name}=${cookie?.value};`,
    });
    return !!data;
  } catch (err: any) {
    return false;
  }
}
