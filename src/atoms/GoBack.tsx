import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type { PropsWithChildren } from 'react';
import ArrowBack from '@assets/shared/icon-arrow-left.svg';

type GoBackProps = {
  isBright?: boolean;
} & LinkProps;

export default function GoBack({
  isBright,
  children,
  ...linkProps
}: PropsWithChildren<GoBackProps>) {
  return (
    <Link
      {...linkProps}
      className={`flex items-center gap-4 text-display4 hover:underline ${
        isBright ? 'text-white' : 'text-grey'
      }`}
    >
      <ArrowBack className={isBright ? 'text-white' : 'text-blue'} />
      {children}
    </Link>
  );
}
