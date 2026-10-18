import { Button } from '@heroui/react'
import { mockProducts } from '@shared/lib'
import { Plus } from 'lucide-react'
import { useCallback } from 'react'
import {
	PageHeading,
	ProductFilters,
	ProductsTableEmpty,
	ProductTable,
} from './components'
import { useProductFilters } from './model/use-product-filters'

const productQuantity = mockProducts.length

export const ProductsPage = () => {
	const {
		filters,
		categories,
		filteredProducts,
		updateFilters,
		resetFilters,
		hasActiveFilters,
	} = useProductFilters(mockProducts)

	const renderEmptyState = useCallback(
		() => (
			<ProductsTableEmpty
				resetFilters={resetFilters}
				hasActiveFilters={hasActiveFilters}
			/>
		),
		[resetFilters, hasActiveFilters],
	)

	return (
		<>
			<div className='flex flex-col mb-5'>
				<PageHeading
					productQuantity={productQuantity}
					actionButtonSlot={
						<Button>
							<Plus />
							Добавить товар
						</Button>
					}
				/>
				<ProductFilters
					categories={categories}
					filters={filters}
					onFiltersChange={updateFilters}
					onReset={resetFilters}
				/>
			</div>

			<ProductTable
				products={filteredProducts}
				renderEmptyState={renderEmptyState}
			/>
		</>
	)
}
