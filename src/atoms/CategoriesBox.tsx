import Link from 'next/link';

type CategoriesBoxProps = {
  categories: Category[];
};

type Category = {
  name: string;
  href?: string;
};

export default function CategortiesBox({ categories }: CategoriesBoxProps) {
  return (
    <div className="flex flex-wrap content-start items-start gap-2 rounded-xl bg-white p-6">
      {categories.map(({ href, name }) => {
        return (
          <Link
            key={name}
            href={href || name.toLowerCase()}
            className="rounded-xl bg-light-grey px-4 py-2 text-body3 font-semibold text-blue hover:bg-light-blue active:bg-blue"
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
}
