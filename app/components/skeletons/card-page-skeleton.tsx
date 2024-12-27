'use client';
import { Skeleton } from '@mantine/core';

const CardPageSkeleton = () => {
  return (
    <>
      <div className="col-span-12 md:col-span-4">
        <div className="text-white/70 font-bold text-2xl [text-wrap] mb-5">
          <Skeleton className="my-2 h-5" radius="xl" />
          <Skeleton className="my-2 h-5" radius="xl" />
          <Skeleton className="my-2 h-5 w-1/2" radius="xl" />
        </div>
        <div className="text-white/50 text-xl">
          <Skeleton className="my-2 h-3" radius="xl" />
        </div>
        <div className="text-white/50 text-xl">
          <Skeleton className="my-2 h-3" radius="xl" />
        </div>
        <div className="text-white/50 text-xl">
          <Skeleton className="my-2 h-3" radius="xl" />
        </div>
        <div className="text-white/50 text-xl">
          <Skeleton className="my-2 h-3" radius="xl" />
        </div>
        <div className="text-white/50 text-xl">
          <Skeleton className="my-2 h-3" radius="xl" />
        </div>
        <div className="text-white/50 text-xl">
          <Skeleton className="my-2 h-3" radius="xl" />
        </div>
      </div>
      <div className="col-span-12 md:col-span-8">
        <div className="text-white/60 text-2xl mb-5">
          <Skeleton className="my-2 h-5 w-1/5" radius="xl" />
        </div>
        <div className="text-white/50 text-xl mb-5">
          <Skeleton className="my-2 h-3" radius="xl" />
          <Skeleton className="my-2 h-3" radius="xl" />
          <Skeleton className="my-2 h-3" radius="xl" />
          <Skeleton className="my-2 h-3 w-1/3" radius="xl" />
        </div>
        <div className="text-white/50 text-xl">
          <Skeleton className="my-2 h-3" radius="xl" />
          <Skeleton className="my-2 h-3" radius="xl" />
          <Skeleton className="my-2 h-3" radius="xl" />
          <Skeleton className="my-2 h-3 w-1/3" radius="xl" />
        </div>
      </div>
    </>
  );
};

export default CardPageSkeleton;
