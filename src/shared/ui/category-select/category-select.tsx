import type { Key } from '@heroui/react'
import { Select } from '@shared/ui'
import { memo } from 'react'

export interface ICategories {
	id: string
	label: string
}

interface CategorySelectProps {
	categories: ICategories[]
	value: Key | null
	onChange: (value: Key | null) => void
}

const CategorySelectComponent: React.FC<CategorySelectProps> = ({
	categories,
	value,
	onChange,
}) => {
	return (
		<>
			<Select<ICategories>
				className='min-w-36 w-fit'
				value={value}
				onChange={onChange}
				items={categories}
				placeholder='Категория'
			/>
		</>
	)
}

export const CategorySelect = memo(CategorySelectComponent)
