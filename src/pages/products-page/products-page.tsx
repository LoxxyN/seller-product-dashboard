import { Button } from '@heroui/react'
import { Plus } from 'lucide-react'
import { useCallback } from 'react'
import {
	PageHeading,
	ProductFilters,
	ProductsTableEmpty,
	ProductTable,
} from './components'
import { useProductFilters, useProducts } from './model'

export const ProductsPage = () => {
	const { products } = useProducts()
	const {
		filters,
		categories,
		filteredProducts,
		updateFilters,
		resetFilters,
		hasActiveFilters,
	} = useProductFilters(products)

	const renderEmptyState = useCallback(
		() => (
			<ProductsTableEmpty
				resetFilters={resetFilters}
				hasActiveFilters={hasActiveFilters}
			/>
		),
		[resetFilters, hasActiveFilters],
	)

	const productQuantity = products.length

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
