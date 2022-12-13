import ArrowUp from '@assets/shared/icon-arrow-up.svg';

export type ScorePillProps = {
  score: string | number;
};

export default function ScorePill({ score }: { score: string | number }) {
  return (
    <button
      className="group flex items-center justify-center gap-2 rounded-xl bg-light-grey px-4 py-2 text-body3 font-bold text-darkest-grey hover:bg-light-blue active:bg-blue active:text-white md:flex-col md:pt-4 md:pb-2"
      onClick={() => {
        alert('Up score!');
      }}
    >
      <ArrowUp className="text-darkest-grey group-active:text-white" />
      {score}
    </button>
  );
}
