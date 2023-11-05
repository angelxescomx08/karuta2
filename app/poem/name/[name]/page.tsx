import { CardPage } from '@/app/components/card-page'
import CardPageSkeleton from '@/app/components/skeletons/card-page-skeleton'
import { Suspense } from 'react'

const PoemName = ({
  params,
}: {
  params: { name: string };
}) => {
  
  return (
    <Suspense fallback={<CardPageSkeleton />}>
      <CardPage name={params.name} />
    </Suspense>
  )
}

export default PoemName