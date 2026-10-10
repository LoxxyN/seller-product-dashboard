import type { Key } from '@heroui/react'
import { SearchInput } from '@shared/ui'
import { useState } from 'react'
import { CategorySelect, type ICategories } from '../category-select'
import { StatusSelect, type IStatus } from '../status-select'

const statusesMock: IStatus[] = [
	{ id: 'all', label: 'Все' },
	{ id: 'active', label: 'Активен' },
	{ id: 'draft', label: 'Черновик' },
	{ id: 'archive', label: 'Архив' },
]

const categoriesMock: ICategories[] = [
	{ id: 'electronic', label: 'Электороника' },
	{ id: 'garden', label: 'Садовые принадлежности' },
]

export const ProductFilters = () => {
	const [value, setValue] = useState('')
	const [category, setCategory] = useState<Key | null>('')
	const [status, setStatus] = useState<Key | null>('')

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
			<StatusSelect
				statuses={statusesMock}
				value={status}
				onChange={newValue => setStatus(newValue)}
			/>
		</div>
	)
}
