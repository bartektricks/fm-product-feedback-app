import Button from '@atoms/Button';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

export default function UserBox() {
  const { data } = useSession();
  console.log(data);
  return (
    <div className="flex flex-col content-start items-start gap-4 rounded-xl bg-white p-6">
      {data?.user && (
        <div className="flex items-center gap-3">
          {data.user.image && (
            <Image
              src={data.user.image}
              alt="User profile"
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
          <div className="text-dark-grey">
            <h3 className="text-display2">{data.user.name || 'Github user'}</h3>
            <span className="body1">@{data.user.login}</span>
          </div>
        </div>
      )}
      {data?.user ? (
        <Button
          href="#logout"
          color="dark-grey"
          onClick={() => {
            signOut();
          }}
        >
          Sign out
        </Button>
      ) : (
        <Button
          href="#login"
          color="dark-grey"
          onClick={() => {
            signIn();
          }}
        >
          Sign in with Github
        </Button>
      )}
    </div>
  );
}
