import type { Key } from '@heroui/react'
import type { TProductStatus } from '@shared/types'
import { useCallback } from 'react'
import {
	filterOptions,
	type IProductFilters,
	type TStockFilter,
} from '../../model/filters'
import { CategorySelect, type ICategories } from '../category-select'
import { StatusSelect } from '../status-select'
import { StockSelect } from '../stock-select'

interface ProductSelectsProps {
	categoryOptions: ICategories[]
	filters: IProductFilters
	onFiltersChange: (patch: Partial<IProductFilters>) => void
	resetButtonSlot: React.ReactNode
}

const isProductStatus = (key: Key | null): key is TProductStatus =>
	filterOptions.status.some(status => status.id === key)
const isStockFilter = (key: Key | null): key is TStockFilter =>
	filterOptions.stock.some(stock => stock.id === key)

export const ProductSelects: React.FC<ProductSelectsProps> = ({
	filters,
	categoryOptions,
	resetButtonSlot,
	onFiltersChange,
}) => {
	const onCategoryChange = useCallback(
		(key: Key | null) =>
			onFiltersChange({ category: key === null ? null : String(key) }),
		[onFiltersChange],
	)

	const onStatusChange = useCallback(
		(key: Key | null) =>
			onFiltersChange({ status: isProductStatus(key) ? key : null }),
		[onFiltersChange],
	)

	const onStockChange = useCallback(
		(key: Key | null) =>
			onFiltersChange({ stock: isStockFilter(key) ? key : null }),
		[onFiltersChange],
	)

	return (
		<div className='flex gap-2 items-center'>
			<CategorySelect
				categories={categoryOptions}
				value={filters.category}
				onChange={onCategoryChange}
			/>
			<StatusSelect
				statuses={filterOptions.status}
				value={filters.status}
				onChange={onStatusChange}
			/>
			<StockSelect
				stock={filterOptions.stock}
				value={filters.stock}
				onChange={onStockChange}
			/>
			{resetButtonSlot}
		</div>
	)
}
