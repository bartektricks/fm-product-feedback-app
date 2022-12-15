import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ArrowUp from '@assets/shared/icon-arrow-up.svg';
import ArrowDown from '@assets/shared/icon-arrow-down.svg';
import Tick from '@assets/shared/icon-check.svg';
import useClickOutside from '@hooks/useClickOutside';

export const SORT_TYPES = [
  { value: 'MOST_UPVOTES', name: 'Most Upvotes' },
  { value: 'LEAST_UPVOTES', name: 'Least Upvotes' },
  { value: 'MOST_COMMENTS', name: 'Most Comments' },
  { value: 'LEAST_COMMENTS', name: 'Least Comments' },
] as const;

const DROPDOWN_VARIANTS = {
  open: {
    opacity: 1,
    y: '2.4rem',
    transition: {
      duration: 0.1,
    },
    height: 'auto',
  },
  closed: {
    opacity: 0,
    y: '2rem',
    height: 0,
    transition: {
      duration: 0.1,
      delay: 0.2,
    },
  },
};

export default function SortPosts() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useClickOutside<HTMLUListElement>((e) => {
    if (!isOpen) return;

    if (
      e?.target instanceof HTMLElement &&
      !buttonRef.current?.contains(e.target)
    ) {
      setIsOpen(false);
    }
  });
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<typeof SORT_TYPES[number]>(
    SORT_TYPES[0],
  );

  const Arrow = isOpen ? ArrowUp : ArrowDown;

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        className="flex items-center gap-2 text-display4 font-normal text-grey"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen((prev) => !prev);
        }}
      >
        <span>
          Sort by: <strong>{selected.name}</strong>
        </span>
        <Arrow className="inline-block" />
      </button>
      <motion.ul
        className={`absolute top-full left-0 w-screen max-w-[16rem] overflow-hidden rounded-xl bg-white shadow-md ${
          isOpen ? '' : 'pointer-events-none'
        }`}
        animate={isOpen ? 'open' : 'closed'}
        variants={DROPDOWN_VARIANTS}
        ref={dropdownRef}
      >
        {SORT_TYPES.map((option) => (
          <li
            key={option.value}
            className="border-b border-solid border-b-darkest-grey border-opacity-20 last:border-0"
          >
            <button
              type="button"
              className={
                'flex w-full items-center justify-between gap-2 px-6 py-3 hover:text-purple'
              }
              onClick={(e) => {
                e.preventDefault();
                setSelected(option);
                setIsOpen(false);
              }}
            >
              {option.name} {option.value === selected.value && <Tick />}
            </button>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
