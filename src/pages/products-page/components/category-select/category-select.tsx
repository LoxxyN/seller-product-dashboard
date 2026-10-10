import type { Key } from '@heroui/react'
import { Select } from '@shared/ui'

export interface ICategories {
	id: string
	label: string
}

type CategorySelectProps = {
	categories: ICategories[]
	value: Key | null
	onChange: (value: Key | null) => void
}

export const CategorySelect: React.FC<CategorySelectProps> = ({
	categories,
	value,
	onChange,
}) => {
	return (
		<>
			<Select<ICategories>
				className='min-w-32 w-fit'
				value={value}
				onChange={onChange}
				items={categories}
				placeholder='Категория'
			/>
		</>
	)
}
