import Image from 'next/image';
import Hamburger from '@assets/shared/mobile/icon-hamburger.svg';
import mobileGradient from '@assets/suggestions/mobile/background-header.png';
import desktopGradient from '@assets/suggestions/desktop/background-header.png';

export default function BoardName({ name }: { name: string }) {
  return (
    <div className="relative flex items-center justify-between overflow-hidden bg-purple py-4 px-6 md:items-end md:rounded-xl md:py-6">
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
      <Hamburger className="isolate md:hidden" />
    </div>
  );
}
