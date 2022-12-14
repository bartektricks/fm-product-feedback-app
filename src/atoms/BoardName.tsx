import Image from 'next/image';
import Close from '@assets/shared/mobile/icon-close.svg';
import Hamburger from '@assets/shared/mobile/icon-hamburger.svg';
import mobileGradient from '@assets/suggestions/mobile/background-header.png';
import desktopGradient from '@assets/suggestions/desktop/background-header.png';
import type { MouseEventHandler } from 'react';
import { forwardRef } from 'react';

type BoardProps = {
  name: string;
  handleClick: MouseEventHandler<HTMLButtonElement> | undefined;
  isOpened: boolean;
};

const BoardName = forwardRef<HTMLDivElement, BoardProps>(
  ({ name, handleClick, isOpened }, ref) => (
    <div
      ref={ref}
      className="relative flex items-center justify-between overflow-hidden bg-purple py-4 px-6 md:items-end md:rounded-xl md:py-6 xl:min-h-[8.56rem]"
    >
      <Image
        src={mobileGradient}
        alt="Gradient background"
        className="absolute inset-0 h-full w-full object-cover md:hidden"
      />
      <Image
        src={desktopGradient}
        alt="Gradient background desktop"
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
      />
      <div className="isolate text-white">
        <h1 className="text-display4 md:text-display2">{name}</h1>
        <p className="text-body3 opacity-75 md:text-body2">Feedback Board</p>
      </div>
      <button type="button" className="isolate md:hidden" onClick={handleClick}>
        {isOpened ? <Close /> : <Hamburger />}
      </button>
    </div>
  ),
);

BoardName.displayName = 'BoardName';

export default BoardName;
