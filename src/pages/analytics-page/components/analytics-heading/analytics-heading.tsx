import { formatPrice } from '@shared/utils'
import { InfoCard } from '../info-card'

export const AnalyticsHeading = () => {
	return (
		<>
			<div className='flex w-full justify-evenly gap-3'>
				<InfoCard
					title='Выручка'
					content={formatPrice(4028000)}
					percent={12.4}
				/>
				<InfoCard title='Заказы' content={'1 418'} percent={8.1} />
				<InfoCard
					title='Средний чек'
					content={formatPrice(2840)}
					percent={3.9}
				/>
				<InfoCard
					title='Конверсия'
					content={'3,4%'}
					percent={0.4}
					isPositivePercent={false}
				/>
			</div>
		</>
	)
}
