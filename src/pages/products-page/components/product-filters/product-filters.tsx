import { memo, useMemo } from 'react'
import type { IProductFilters } from '../../model/filters'
import { filterOptions } from '../../model/filters'
import { type ICategories } from '../category-select'
import { ProductSelects } from '../product-selects/product-selects'
import { ResetFilterButton } from '../reset-filters-button'
import { Search } from '../search'
import { SelectedFilter } from '../selected-filter'

interface ProductFiltersProps {
	categories: string[]
	filters: IProductFilters
	onFiltersChange: (patch: Partial<IProductFilters>) => void
	onReset: () => void
}

const ProductFiltersComponent: React.FC<ProductFiltersProps> = ({
	categories,
	filters,
	onFiltersChange,
	onReset,
}) => {
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
					<Search
						value={filters.search}
						onChange={search => onFiltersChange({ search })}
					/>

					<>
						<ProductSelects
							filters={filters}
							categoryOptions={categoryOptions}
							onFiltersChange={onFiltersChange}
							resetButtonSlot={<ResetFilterButton onClick={onReset} />}
						/>
					</>
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

export const ProductFilters = memo(ProductFiltersComponent)
