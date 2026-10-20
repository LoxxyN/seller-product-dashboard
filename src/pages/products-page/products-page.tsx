import { Button } from '@heroui/react'
import { Plus } from 'lucide-react'
import { useCallback } from 'react'
import {
	PageHeading,
	ProductFilters,
	ProductsTableEmpty,
	ProductTable,
} from './components'
import { ProductsLoading } from './loading'
import { useProductFilters, useProducts } from './model'

export const ProductsPage = () => {
	const { products, isPending } = useProducts()
	const {
		filters,
		categories,
		filteredProducts,
		updateFilters,
		resetFilters,
		hasActiveFilters,
	} = useProductFilters(products)
	const productQuantity = products.length

	const renderEmptyState = useCallback(
		() => (
			<ProductsTableEmpty
				resetFilters={resetFilters}
				hasActiveFilters={hasActiveFilters}
			/>
		),
		[resetFilters, hasActiveFilters],
	)

	if (isPending) return <ProductsLoading />

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
