import { CardPage } from '@/app/components/card-page'
import CardPageSkeleton from '@/app/components/skeletons/card-page-skeleton'
import { Suspense, use } from 'react'

const PoemName = ({
  params,
}: {
  params: Promise<{ name: string }>;
}) => {
  
  const { name } = use(params)

  return (
    <Suspense fallback={<CardPageSkeleton />}>
      <CardPage name={name} />
    </Suspense>
  )
}

export default PoemName