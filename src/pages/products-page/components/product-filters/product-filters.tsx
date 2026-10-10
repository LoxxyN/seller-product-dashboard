import type { Key } from '@heroui/react'
import { SearchInput } from '@shared/ui'
import { useState } from 'react'
import { CategorySelect, type ICategories } from '../category-select'
import { ResetFilterButton } from '../reset-filters-button'
import { StatusSelect, type IStatus } from '../status-select'
import { StockSelect, type IStock } from '../stock-select'

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

const stockMock: IStock[] = [
	{ id: 'in_stock', label: 'В наличии' },
	{ id: 'not_in_stock', label: 'Нет в наличии' },
]

export const ProductFilters = () => {
	const [searchValue, setSearchValue] = useState<string>('')
	const [category, setCategory] = useState<Key | null>(null)
	const [status, setStatus] = useState<Key | null>(null)
	const [stock, setStock] = useState<Key | null>(null)

	const resetFilters = () => {
		setCategory(null)
		setStatus(null)
		setStock(null)
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
			<StockSelect
				stock={stockMock}
				value={stock}
				onChange={newValue => setStock(newValue)}
			/>
			<ResetFilterButton onClick={resetFilters} />
		</div>
	)
}
