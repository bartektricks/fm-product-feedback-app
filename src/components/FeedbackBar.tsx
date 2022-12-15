import LightBulb from '@assets/suggestions/icon-suggestions.svg';
import Button from '@atoms/Button';
import SortPosts from '@atoms/SortPosts';

export default function FeedbackBar({ postCount }: { postCount?: number }) {
  return (
    <div className="relative z-10 flex items-center justify-between gap-9 bg-darkest-grey px-gutter py-2 @container md:rounded-xl md:py-3 md:pr-3">
      <div className="hidden gap-4 @2xl:flex">
        <LightBulb />
        <span className="text-display3 text-white">
          {postCount || 0} Suggestions
        </span>
      </div>
      <div className="mr-auto">
        <SortPosts />
      </div>
      <Button href="/feedback/add" color="purple">
        + Add Feedback
      </Button>
    </div>
  );
}
