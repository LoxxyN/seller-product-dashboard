import { Button } from '@heroui/react'
import { Plus } from 'lucide-react'
import { useCallback, useMemo } from 'react'
import {
	PageHeading,
	ProductFilters,
	ProductsTableEmpty,
	ProductTable,
} from './components'
import { useSortedProducts } from './components/product-table/use-sorted-products'
import { TablePagination } from './components/table-pagination'
import { ProductsLoading } from './loading'
import { useProductFilters, useProducts } from './model'
import { usePageParams } from './model/use-page-params'
import { usePagination } from './model/use-pagination'
import { useProductSort } from './model/use-product-sort'

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

	const { sortDescriptor, onSortChange } = useProductSort()
	const sortedProducts = useSortedProducts(filteredProducts, sortDescriptor)

	const pageParams = usePageParams()
	const { page, pageSize, total, pageItems, setPage, setPageSize } =
		usePagination(sortedProducts, pageParams)

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

	const pagination = useMemo(
		() =>
			total > 0 ? (
				<TablePagination
					page={page}
					pageSize={pageSize}
					total={total}
					onPageChange={setPage}
					onPageSizeChange={setPageSize}
				/>
			) : undefined,
		[total, page, pageSize, setPage, setPageSize],
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
				products={pageItems}
				sortDescriptor={sortDescriptor}
				onSortChange={onSortChange}
				renderEmptyState={renderEmptyState}
				footer={pagination}
			/>
		</>
	)
}
