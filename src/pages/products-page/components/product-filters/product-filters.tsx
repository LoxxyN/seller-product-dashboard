import type { Key } from '@heroui/react'
import type { TProductStatus } from '@shared/types'
import { useMemo, useState } from 'react'
import type { IProductFilters, TStockFilter } from '../../model/filters'
import { CategorySelect, type ICategories } from '../category-select'
import { ResetFilterButton } from '../reset-filters-button'
import { Search } from '../search'
import { SelectedFilter } from '../selected-filter'
import { StatusSelect, type IStatus } from '../status-select'
import { StockSelect, type IStock } from '../stock-select'

interface IMocks {
	status: IStatus[]
	stock: IStock[]
}

interface ProductFiltersProps {
	categories: string[]
	filters: IProductFilters
	onFiltersChange: (patch: Partial<IProductFilters>) => void
	onReset: () => void
}

const filterOptions: IMocks = {
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

const isProductStatus = (key: Key | null): key is TProductStatus =>
	filterOptions.status.some(status => status.id === key)
const isStockFilter = (key: Key | null): key is TStockFilter =>
	filterOptions.stock.some(stock => stock.id === key)

export const ProductFilters: React.FC<ProductFiltersProps> = ({
	categories,
	filters,
	onFiltersChange,
	onReset,
}) => {
	const [searchValue, setSearchValue] = useState<string>('')

	const categoryOptions = useMemo<ICategories[]>(
		() => categories.map(name => ({ id: name, label: name })),
		[categories],
	)

	const selectedCategory = categoryOptions.find(c => c.id === filters.category)
	const selectedStatus = filterOptions.status.find(s => s.id === filters.status)
	const selectedStock = filterOptions.stock.find(c => c.id === filters.stock)

	return (
		<>
			<div className='my-5 flex flex-col'>
				<div className='flex justify-between items-center'>
					<Search value={searchValue} onChange={newValue => setSearchValue(newValue)} />
					<div className='flex gap-2 items-center'>
						<CategorySelect
							categories={categoryOptions}
							value={filters.category}
							onChange={key => onFiltersChange({ category: key === null ? null : String(key) })}
						/>
						<StatusSelect
							statuses={filterOptions.status}
							value={filters.status}
							onChange={key => onFiltersChange({ status: isProductStatus(key) ? key : null })}
						/>
						<StockSelect
							stock={filterOptions.stock}
							value={filters.stock}
							onChange={key => onFiltersChange({ stock: isStockFilter(key) ? key : null })}
						/>
						<ResetFilterButton onClick={onReset} />
					</div>
				</div>
			</div>

			<div className='flex gap-3'>
				{selectedCategory && (
					<SelectedFilter
						onClick={() => onFiltersChange({ category: null })}
						categoryName={'Категория'}
						selectedFilter={selectedCategory?.label}
					/>
				)}
				{selectedStatus && (
					<SelectedFilter
						onClick={() => onFiltersChange({ status: null })}
						categoryName={'Статус'}
						selectedFilter={selectedStatus?.label}
					/>
				)}
				{selectedStock && (
					<SelectedFilter
						onClick={() => onFiltersChange({ stock: null })}
						categoryName={'Наличие'}
						selectedFilter={selectedStock?.label}
					/>
				)}
			</div>
		</>
	)
}

// Todo: Оптимизировать выбранные категории
