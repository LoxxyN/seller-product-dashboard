import type { Key } from '@heroui/react'
import { useState } from 'react'
import { CategorySelect, type ICategories } from '../category-select'
import { ResetFilterButton } from '../reset-filters-button'
import { Search } from '../search'
import { SelectedFilter } from '../selected-filter'
import { SortingSelect, type ISorting } from '../sorting-select'
import { StatusSelect, type IStatus } from '../status-select'
import { StockSelect, type IStock } from '../stock-select'

interface IMocks {
	sortings: ISorting[]
	statuses: IStatus[]
	categories: ICategories[]
	stock: IStock[]
}

const mocks: IMocks = {
	sortings: [
		{ id: 'asc', label: 'По убыванию' },
		{ id: 'desc', label: 'По возрастанию' },
		{ id: 'recent', label: 'Недавние' },
	],
	statuses: [
		{ id: 'all', label: 'Все' },
		{ id: 'active', label: 'Активен' },
		{ id: 'draft', label: 'Черновик' },
		{ id: 'archive', label: 'Архив' },
	],
	categories: [
		{ id: 'electronic', label: 'Электороника' },
		{ id: 'garden', label: 'Садовые принадлежности' },
	],
	stock: [
		{ id: 'in_stock', label: 'В наличии' },
		{ id: 'not_in_stock', label: 'Нет в наличии' },
	],
}

export const ProductFilters = () => {
	const [searchValue, setSearchValue] = useState<string>('')
	const [category, setCategory] = useState<Key | null>(null)
	const [sorting, setSorting] = useState<Key | null>(null)
	const [status, setStatus] = useState<Key | null>(null)
	const [stock, setStock] = useState<Key | null>(null)

	const selectedCategory = mocks.categories.find(c => c.id === category)
	const selectedSorting = mocks.sortings.find(c => c.id === sorting)
	const selectedStatus = mocks.statuses.find(c => c.id === status)
	const selectedStock = mocks.stock.find(c => c.id === stock)

	const resetFilters = () => {
		setCategory(null)
		setSorting(null)
		setStatus(null)
		setStock(null)
	}

	return (
		<>
			<div className='my-5 flex flex-col'>
				<div className='flex justify-between items-center'>
					<Search value={searchValue} onChange={newValue => setSearchValue(newValue)} />
					<div className='flex gap-2 items-center'>
						<CategorySelect
							categories={mocks.categories}
							onChange={newValue => setCategory(newValue)}
							value={category}
						/>
						<StatusSelect
							statuses={mocks.statuses}
							value={status}
							onChange={newValue => setStatus(newValue)}
						/>
						<StockSelect
							stock={mocks.stock}
							value={stock}
							onChange={newValue => setStock(newValue)}
						/>
						<ResetFilterButton onClick={resetFilters} />
						<SortingSelect
							sortings={mocks.sortings}
							value={sorting}
							onChange={newValue => setSorting(newValue)}
						/>
					</div>
				</div>
			</div>

			<div className='flex gap-3'>
				{selectedCategory && (
					<SelectedFilter
						onClick={() => setCategory(null)}
						categoryName={'Категория'}
						selectedFilter={selectedCategory?.label}
					/>
				)}
				{selectedStatus && (
					<SelectedFilter
						onClick={() => setStatus(null)}
						categoryName={'Статус'}
						selectedFilter={selectedStatus?.label}
					/>
				)}
				{selectedStock && (
					<SelectedFilter
						onClick={() => setStock(null)}
						categoryName={'Наличие'}
						selectedFilter={selectedStock?.label}
					/>
				)}
				{selectedSorting && (
					<SelectedFilter
						onClick={() => setSorting(null)}
						categoryName={'Сортировать по'}
						selectedFilter={selectedSorting?.label}
					/>
				)}
			</div>
		</>
	)
}

// Todo: Оптимизировать выбранные категории
