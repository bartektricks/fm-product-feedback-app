import type { PillProps } from '@atoms/Pill';
import Pill from '@atoms/Pill';
import type { ScorePillProps } from '@atoms/ScorePill';
import ScorePill from '@atoms/ScorePill';
import CommentsIcon from '@assets/shared/icon-comments.svg';

type PostProps = {
  title: string;
  body: string;
  category: PillProps;
  commentCount: number;
} & ScorePillProps;

export default function Post({
  title,
  body,
  category,
  score,
  commentCount,
}: PostProps) {
  return (
    <div className="grid auto-rows-auto grid-cols-2 gap-4 rounded-xl bg-white p-6 @lg:grid-cols-[auto_1fr_auto] @lg:grid-rows-1 @lg:gap-10 @lg:py-7 @lg:px-8">
      <div className="col-span-2 flex flex-col items-start gap-3 text-body3 @lg:col-span-1 @lg:text-body1">
        <h3 className="font-bold text-darkest-grey @lg:text-display3">
          {title}
        </h3>
        <p className="text-grey">{body}</p>
        <Pill {...category} />
      </div>
      <div className="col-span-1 @lg:-order-1 @lg:col-span-1">
        <ScorePill score={score} />
      </div>
      <span
        className={`col-span-1 ml-auto flex items-center gap-2 text-darkest-grey @lg:ml-0`}
      >
        <CommentsIcon />
        <span
          className={`text-body1 font-bold ${
            commentCount ? 'opacity-100' : 'opacity-50'
          }`}
        >
          {commentCount}
        </span>
      </span>
    </div>
  );
}
