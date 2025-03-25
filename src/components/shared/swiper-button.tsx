import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

interface SwiperButtonsProps {
  prevClassName?: string;
  nextClassName?: string;
}

export const SwiperButtons = (props: SwiperButtonsProps) => {
  const { prevClassName, nextClassName } = props;

  return (
    <>
      <Button
        variant="ghost"
        type="button"
        rel="prev"
        size="icon"
        className={cn(
          prevClassName,
          'swiper-button-prev absolute top-[50%] lg:top-[40%] -translate-y-1/2 left-2 lg:left-8 z-10 flex items-center rounded-full bg-white/80 p-2 shadow-md'
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <ChevronLeft className="h-8 w-8 text-black" />
      </Button>
      <Button
        variant="ghost"
        type="button"
        rel="next"
        size="icon"
        className={cn(
          nextClassName,
          'swiper-button-next absolute top-[50%] lg:top-[40%] -translate-y-1/2 right-2 lg:right-46 z-10 flex items-center rounded-full bg-white/80 p-2 shadow-md'
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <ChevronRight className="h-8 w-8 text-black" />
      </Button>
    </>
  );
};
