import type { PillProps } from '@atoms/Pill';
import Pill from '@atoms/Pill';

type Category = PillProps & { id: string | number };

type CategoriesBoxProps = {
  categories: Category[];
};

export default function CategortiesBox({ categories }: CategoriesBoxProps) {
  return (
    <div className="flex flex-wrap content-start items-start gap-2 rounded-xl bg-white p-6">
      {categories.map((category) => (
        <Pill key={category.id} {...category} />
      ))}
    </div>
  );
}
