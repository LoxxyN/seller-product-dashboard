import { CategorySelect, type ICategories } from '@shared/ui'
import { AnalyticsTitle } from '../analytics-title'
import { PeriodTabs } from '../period-tabs'
import type { Key } from '@heroui/react'
import { useState } from 'react'

const CATEGORIES: ICategories[] = [
	{ id: 'Посуда', label: 'Посуда' },
	{ id: 'Электронника', label: 'Электронника' },
]

interface AnalyticsHeadingPeriodProps {}

export const AnalyticsHeadingPeriod: React.FC<
	AnalyticsHeadingPeriodProps
> = () => {
	const [value, setValue] = useState<Key | null>(null)

	return (
		<div className='flex flex-col gap-3'>
			<AnalyticsTitle dateFrom={'9 сен'} dateTo={'14 окт'} />

			<div className='flex items-center gap-2'>
				<PeriodTabs />
				<CategorySelect
					categories={CATEGORIES}
					value={value}
					onChange={val => setValue(val)}
				/>
			</div>
		</div>
	)
}
