import { currentUserProfile } from '@/lib/auth';
import { useEffect, useState } from 'react';

export const useUser = () => {
  const [user, setUser] = useState<Awaited<ReturnType<typeof currentUserProfile>> | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await currentUserProfile();
      setUser(user);
    };

    fetchUser();
  }, []);

  return user;
};
