import { Tabs as HTabs } from '@heroui/react'

const PERIODS = [
	{ label: '7 дней' },
	{ label: '30 дней' },
	{ label: '90 дней' },
]

export const PeriodTabs = () => {
	return (
		<HTabs className='w-full max-w-96'>
			<HTabs.ListContainer>
				<HTabs.List aria-label='Period'>
					{PERIODS.map(item => (
						<HTabs.Tab key={item.label}>
							{item.label}
							<HTabs.Indicator />
						</HTabs.Tab>
					))}
				</HTabs.List>
			</HTabs.ListContainer>
		</HTabs>
	)
}
