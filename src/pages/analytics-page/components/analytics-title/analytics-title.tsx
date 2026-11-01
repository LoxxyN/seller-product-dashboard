interface AnalyticsTitleProps {
	dateFrom: string | number
	dateTo: string | number
}

export const AnalyticsTitle = ({ dateFrom, dateTo }: AnalyticsTitleProps) => {
	return (
		<div className='flex gap-3 items-center'>
			<h2 className='text-3xl font-semibold'>Аналитика</h2>
			<p className='text-muted text-sm'>
				{dateFrom} – {dateTo} 2026
			</p>
		</div>
	)
}
