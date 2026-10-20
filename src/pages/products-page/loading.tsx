import { Skeleton } from '@heroui/react'

export const ProductsLoading = () => {
	return (
		<>
			<section className='heading'>
				<div className='flex justify-between items-center'>
					<div>
						<Skeleton className='rounded-xl h-9 w-40 mb-2' />
						<Skeleton className='rounded-xl h-5 w-24' />
					</div>
					<div>
						<Skeleton className='rounded-xl h-9 w-45' />
					</div>
				</div>

				<div className='filters'>
					<div className='flex items-center justify-between mt-5 w-full'>
						<Skeleton className='rounded-xl h-9 w-1/3' />
						<div className='flex gap-2'>
							<Skeleton className='rounded-xl h-9 w-40' />
							<Skeleton className='rounded-xl h-9 w-40' />
							<Skeleton className='rounded-xl h-9 w-40' />
							<Skeleton className='rounded-xl h-9 w-45' />
						</div>
					</div>
				</div>
			</section>

			<section className='table w-full mt-11'>
				<Skeleton className='rounded-2xl h-160 w-full' />
			</section>
		</>
	)
}
