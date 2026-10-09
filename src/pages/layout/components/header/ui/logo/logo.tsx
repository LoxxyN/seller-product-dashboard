import { ROUTER } from '@shared/lib'

export const Logo = () => {
	return (
		<a className='flex gap-4 items-center' href={ROUTER['produtcs']}>
			<img src='/logo.svg' />
			<p className='font-medium'>ProductDashboard</p>
		</a>
	)
}
