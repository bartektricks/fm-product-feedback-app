import BoardName from '@atoms/BoardName';
import Roadmap from '@atoms/Roadmap';
import { useRef, useState } from 'react';
import CategortiesBox from './CategoriesBox';
import UserBox from './UserBox';

export default function HomeHeader() {
  const navRef = useRef<HTMLDivElement>(null);
  const [isOpened, setIsOpened] = useState(false);

  const navHeightInPx = `${navRef.current?.getBoundingClientRect().height}px`;

  return (
    <header className="sticky inset-x-0 top-0 z-30 md:static md:grid md:grid-cols-3 md:gap-3 md:pb-10 xl:flex xl:flex-col xl:gap-6">
      <BoardName
        ref={navRef}
        name="Frontend Mentor"
        handleClick={(e) => {
          e.preventDefault();
          setIsOpened((prev) => !prev);
        }}
        isOpened={isOpened}
      />
      <div
        style={{
          top: navHeightInPx,
        }}
        className={`fixed inset-0 bg-black bg-opacity-50 transition-all ${
          isOpened ? 'visible opacity-100' : 'invisible opacity-0'
        } md:visible md:static md:col-span-2 md:opacity-100`}
      >
        <nav
          className={`ml-auto flex h-full max-w-[72%] flex-col gap-gutter overflow-y-auto bg-very-light-grey p-gutter transition-transform md:p-0 ${
            isOpened ? 'translate-x-0' : 'translate-x-full'
          } md:grid md:max-w-none md:translate-x-0 md:grid-cols-2 md:gap-3 xl:flex xl:flex-col xl:gap-6`}
        >
          <CategortiesBox categories={[{ name: 'name', id: 1, href: '#' }]} />
          <Roadmap
            roadmapLink="/"
            status={[
              { name: 'Planned', count: 0, color: 'bg-orange' },
              { name: 'In-Progress', count: 0, color: 'bg-purple' },
              { name: 'Live', count: 0, color: 'bg-ocean-blue' },
            ]}
          />
          <UserBox />
        </nav>
      </div>
    </header>
  );
}
