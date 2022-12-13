import Link from 'next/link';

export type PillProps = {
  name: string;
  href: string;
};

export default function Pill({ name, href }: PillProps) {
  return (
    <Link
      href={href}
      className="rounded-xl bg-light-grey px-4 py-2 text-body3 font-semibold text-blue hover:bg-light-blue active:bg-blue active:text-white"
    >
      {name}
    </Link>
  );
}
