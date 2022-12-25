import Image from 'next/image';
import placeholderImage from '@assets/user-images/image-anne.jpg';

type ComponentProps = {
  image: string | null;
  login: string | null;
  name: string | null;
  body: string;
};

export default function Comment({
  image,
  login = 'user',
  name,
  body,
}: ComponentProps) {
  return (
    <div className="ml-x-8 grid grid-cols-[auto_1fr] items-center gap-4 @xl:gap-x-8">
      <Image
        className="rounded-full"
        width={40}
        height={40}
        src={image || placeholderImage}
        alt={`${login}'s avatar`}
      />
      <div className="flex items-center justify-between">
        <div>
          <h4>{name}</h4>
          <span>@{login}</span>
        </div>
        <button>Reply</button>
      </div>
      <p className="col-span-2 @xl:col-start-2 @xl:col-end-3">{body}</p>
    </div>
  );
}
