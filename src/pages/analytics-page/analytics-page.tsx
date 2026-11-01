import { AnalyticsHeadingPeriod } from './components'
import { AnalyticsHeading } from './components'

export const AnalyticsPage = () => {
	return (
		<div className='flex flex-col gap-4'>
			<AnalyticsHeadingPeriod />
			<AnalyticsHeading />
		</div>
	)
}
