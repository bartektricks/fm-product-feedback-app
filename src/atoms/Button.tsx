import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type { PropsWithChildren } from 'react';

const buttonColors = {
  red: 'bg-red hover:bg-light-red',
  purple: 'bg-purple hover:bg-light-purple',
  blue: 'bg-blue hover:bg-[#7C91F9]',
  'dark-grey': `bg-darkest-grey hover:bg-[#656EA3]`,
};

type ButtonProps = {
  color: keyof typeof buttonColors;
} & LinkProps;

export default function Button({
  children,
  color,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  return (
    <Link
      {...rest}
      className={`inline-flex min-h-[2.75rem] min-w-[9.75rem] items-center justify-center rounded-xl p-2 text-display4 text-light-grey ${buttonColors[color]}`}
    >
      {children}
    </Link>
  );
}
