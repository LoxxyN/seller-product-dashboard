import type { Key } from '@heroui/react'
import { Select } from '@shared/ui'

export interface ISorting {
	id: string
	label: string
}

interface SortingSelectProps {
	sortings: ISorting[]
	value: Key | null
	onChange: (value: Key | null) => void
}

export const SortingSelect: React.FC<SortingSelectProps> = ({
	value,
	onChange,
	sortings,
}) => {
	return (
		<>
			<Select<ISorting>
				className='min-w-46 w-fit'
				value={value}
				onChange={onChange}
				items={sortings}
				placeholder='Сортировать'
			/>
		</>
	)
}
