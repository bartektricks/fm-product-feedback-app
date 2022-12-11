import { type NextPage } from 'next';

import { trpc } from '../utils/trpc';
import BoardName from '@atoms/BoardName';
import CategortiesBox from '@atoms/CategoriesBox';
import Roadmap from '@atoms/Roadmap';

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: 'from tRPC' });

  return (
    <div className="grid grid-cols-3 grid-rows-1 gap-4 bg-purple p-6">
      <BoardName name="Frontend Mentor" />
      <CategortiesBox
        categories={[
          { name: 'All', href: 'all' },
          { name: 'UI' },
          { name: 'UX' },
          { name: 'Enhancement' },
          { name: 'Bug' },
        ]}
      />
      <Roadmap
        roadmapLink="/"
        status={[
          { name: 'Planned', count: 0, color: 'bg-orange' },
          { name: 'In-Progress', count: 0, color: 'bg-purple' },
          { name: 'Live', count: 0, color: 'bg-ocean-blue' },
        ]}
      />
      <main>{hello.data?.greeting}</main>
    </div>
  );
};

export default Home;
