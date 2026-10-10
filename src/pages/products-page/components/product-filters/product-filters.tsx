import type { Key } from '@heroui/react'
import { SearchInput } from '@shared/ui'
import { useState } from 'react'
import { CategorySelect, type ICategories } from '../category-select'
import { ResetFilterButton } from '../reset-filters-button'
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
	const [searchValue, setSearchValue] = useState<string>('')
	const [category, setCategory] = useState<Key | null>(null)
	const [status, setStatus] = useState<Key | null>(null)

	const resetFilters = () => {
		setCategory(null)
		setStatus(null)
	}

	return (
		<div className='my-5 flex gap-2 items-center'>
			<SearchInput
				value={searchValue}
				onChange={newValue => setSearchValue(newValue)}
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
			<ResetFilterButton onClick={resetFilters} />
		</div>
	)
}
