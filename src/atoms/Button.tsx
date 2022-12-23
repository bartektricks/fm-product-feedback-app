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
      className={`inline-flex items-center justify-center rounded-xl px-4 py-3 text-display4 text-light-grey md:px-6 ${buttonColors[color]}`}
    >
      {children}
    </Link>
  );
}
