import Link from 'next/link';

type RoadmapProps = {
  status: Status[];
  roadmapLink: string;
};

type Status = {
  name: string;
  color: 'bg-orange' | 'bg-purple' | 'bg-ocean-blue';
  count: number;
};

export default function Roadmap({ status, roadmapLink }: RoadmapProps) {
  return (
    <div className="rounded-xl bg-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-display3 text-darkest-grey">Roadmap</h2>
        <Link
          className="text-body3 text-blue underline hover:text-[#8397F8]"
          href={roadmapLink}
        >
          View
        </Link>
      </div>
      <ul className="flex flex-col gap-2">
        {status.map(({ name, color, count }) => (
          <li
            key={name + color}
            className="flex items-center text-body1 text-grey"
          >
            <span className={`mr-4 h-2 w-2 rounded-full ${color}`} />
            <p>{name}</p>
            <span className="mr-0 ml-auto font-bold">{count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
