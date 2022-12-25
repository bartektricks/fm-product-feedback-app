import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type { PropsWithChildren } from 'react';
import type { Url } from 'url';

const buttonColors = {
  red: 'bg-red hover:bg-light-red',
  purple: 'bg-purple hover:bg-light-purple',
  blue: 'bg-blue hover:bg-[#7C91F9]',
  'dark-grey': `bg-darkest-grey hover:bg-[#656EA3]`,
};

type SharedProps = {
  color: keyof typeof buttonColors;
};

type JSXButtonProps = JSX.IntrinsicElements['button'] & {
  href?: never;
};

type ButtonComponentProps = PropsWithChildren<
  (JSXButtonProps | LinkProps) & SharedProps
>;

function isPropsForAnchorElement(
  props: ButtonComponentProps,
): props is LinkProps & SharedProps {
  return 'href' in props;
}

const Button = (props: ButtonComponentProps) => {
  const className = `inline-flex items-center justify-center rounded-xl px-4 py-3 text-display4 text-light-grey md:px-6 ${
    buttonColors[props.color]
  }`;

  if (isPropsForAnchorElement(props)) {
    return <Link {...props} className={className} />;
  }

  return <button {...props} className={className} />;
};

export default Button;
