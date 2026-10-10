import type { Key } from '@heroui/react'
import { SearchInput } from '@shared/ui'
import { useState } from 'react'
import { CategorySelect, type ICategories } from '../category-select'

const categoriesMock: ICategories[] = [
	{ id: 'electronic', label: 'Электороника' },
	{ id: 'garden', label: 'Садовые принадлежности' },
]

export const ProductFilters = () => {
	const [value, setValue] = useState('')
	const [category, setCategory] = useState<Key | null>('garden')

	return (
		<div className='my-5 flex gap-2 items-center'>
			<SearchInput
				value={value}
				onChange={newValue => setValue(newValue)}
				placeholder='Поиск по названию или артикулу'
			/>
			<CategorySelect
				categories={categoriesMock}
				onChange={newValue => setCategory(newValue)}
				value={category}
			/>
		</div>
	)
}
