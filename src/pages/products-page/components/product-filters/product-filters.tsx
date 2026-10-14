import type { Key } from '@heroui/react'
import { useMemo, useState } from 'react'
import { CategorySelect, type ICategories } from '../category-select'
import { ResetFilterButton } from '../reset-filters-button'
import { Search } from '../search'
import { SelectedFilter } from '../selected-filter'
import { SortingSelect, type ISorting } from '../sorting-select'
import { StatusSelect, type IStatus } from '../status-select'
import { StockSelect, type IStock } from '../stock-select'

interface IMocks {
	sorting: ISorting[]
	status: IStatus[]
	stock: IStock[]
}

const filters: IMocks = {
	sorting: [
		{ id: 'asc', label: 'По убыванию' },
		{ id: 'desc', label: 'По возрастанию' },
		{ id: 'recent', label: 'Недавние' },
	],
	status: [
		{ id: 'active', label: 'Активен' },
		{ id: 'draft', label: 'Черновик' },
		{ id: 'archive', label: 'Архив' },
	],
	stock: [
		{ id: 'in_stock', label: 'В наличии' },
		{ id: 'not_in_stock', label: 'Нет в наличии' },
	],
}

interface ProductFiltersProps {
	categories: string[]
	category: string | null
	onCategoryChange: (category: string | null) => void
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
	categories,
	category,
	onCategoryChange,
}) => {
	const [searchValue, setSearchValue] = useState<string>('')
	const [sorting, setSorting] = useState<Key | null>(null)
	const [status, setStatus] = useState<Key | null>(null)
	const [stock, setStock] = useState<Key | null>(null)

	const selectedSorting = filters.sorting.find(c => c.id === sorting)
	const selectedStatus = filters.status.find(c => c.id === status)
	const selectedStock = filters.stock.find(c => c.id === stock)

	const categoryOptions = useMemo<ICategories[]>(
		() => categories.map(name => ({ id: name, label: name })),
		[categories],
	)

	const selectedCategory = categoryOptions.find(c => c.id === category)

	const resetFilters = () => {
		onCategoryChange(null)
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
							categories={categoryOptions}
							onChange={key => onCategoryChange(key === null ? null : String(key))}
							value={category}
						/>
						<StatusSelect
							statuses={filters.status}
							value={status}
							onChange={newValue => setStatus(newValue)}
						/>
						<StockSelect
							stock={filters.stock}
							value={stock}
							onChange={newValue => setStock(newValue)}
						/>
						<ResetFilterButton onClick={resetFilters} />
						<SortingSelect
							sortings={filters.sorting}
							value={sorting}
							onChange={newValue => setSorting(newValue)}
						/>
					</div>
				</div>
			</div>

			<div className='flex gap-3'>
				{selectedCategory && (
					<SelectedFilter
						onClick={() => onCategoryChange(null)}
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
