'use client';

import { Authenticated, Unauthenticated, useMutation, useQuery } from 'convex/react';
import { api } from '@workspace/backend/_generated/api';
import { Button } from '@workspace/ui/components/button';
import { SignInButton, UserButton } from '@clerk/nextjs';

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  const handleAddUser = async () => {
    await addUser();
  };

  return (
    <div>
      <Authenticated>
        <div className="flex flex-col items-center justify-center min-h-svh">
          <p>apps/web</p>
          <Button className="my-4 bg-blue-600 text-white p-4" onClick={() => handleAddUser()}>
            Add User
          </Button>
          <UserButton />
          <div className="max-w-sm w-full mx-auto">{JSON.stringify(users, null, 2)}</div>
        </div>
      </Authenticated>
      <Unauthenticated>
        <div className="flex flex-col items-center justify-center min-h-svh">
          Must be authenticated to view this page.
          <SignInButton />
        </div>
      </Unauthenticated>
    </div>
  );
}
