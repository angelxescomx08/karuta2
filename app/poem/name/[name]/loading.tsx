"use client"
import { type ReactElement } from "react";
import { Skeleton } from '@mantine/core';

export default function Loading(): ReactElement {
  return (
    <div className="grid grid-cols-12"> 
      <div className="col-span-12 md:col-span-4">
        <Skeleton height={8} />
        <Skeleton height={8} />
        <Skeleton height={8} />
        <Skeleton height={8} />
        <Skeleton height={8} />
        <Skeleton height={8} />
      </div>
      <div className="col-span-12 md:col-span-4">
        <Skeleton height={8} />
        <Skeleton height={8} />
        <Skeleton height={8} />
        <Skeleton height={8} />
        <Skeleton height={8} />
        <Skeleton height={8} />
      </div>
    </div>
  )
}