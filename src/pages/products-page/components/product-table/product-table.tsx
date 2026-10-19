import type { Selection, SortDescriptor } from '@heroui/react'
import type { IProduct } from '@shared/types'
import { Table } from '@shared/ui'
import { memo, useEffect, useMemo, useState } from 'react'
import { usePagination } from '../../model/use-pagination'
import { TablePagination } from '../table-pagination'
import { productColumns } from './columns'
import { useSortedProducts } from './use-sorted-products'

interface ProductTableProps {
	products: IProduct[]
	renderEmptyState?: () => React.ReactNode
}

const DEFAULT_SORT: SortDescriptor = {
	column: 'updatedAt',
	direction: 'descending',
}

const ProductTableComponent: React.FC<ProductTableProps> = ({
	products,
	renderEmptyState,
}) => {
	const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set())
	const [sortDescriptor, setSortDescriptor] =
		useState<SortDescriptor>(DEFAULT_SORT)

	const items = useSortedProducts(products, sortDescriptor)
	const { setPage, setPageSize, page, pageItems, pageSize, total } =
		usePagination(items)

	useEffect(() => {
		setSelectedKeys(new Set())
	}, [products])

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

	return (
		<Table
			classNames={{
				scrollContainer: 'max-h-[585px] h-fit',
				content: 'min-w-[600px]',
			}}
			columns={productColumns}
			items={pageItems}
			ariaLabel='Таблица товаров'
			selectionMode='multiple'
			selectedKeys={selectedKeys}
			onSelectionChange={setSelectedKeys}
			sortDescriptor={sortDescriptor}
			onSortChange={setSortDescriptor}
			renderEmptyState={renderEmptyState}
			footer={pagination}
		/>
	)
}

export const ProductTable = memo(ProductTableComponent)
