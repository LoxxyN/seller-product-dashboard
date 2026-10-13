import type { Selection, SortDescriptor } from '@heroui/react'
import { mockProducts } from '@shared/lib'
import { Table } from '@shared/ui'
import { useState } from 'react'
import { productColumns } from './columns'
import { ProductsTableEmpty } from './table-empty'
import { useSortedProducts } from './use-sorted-products'

export const ProductTable: React.FC = () => {
	const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set())
	const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
		column: 'updatedAt',
		direction: 'descending',
	})

	const products = useSortedProducts(mockProducts, sortDescriptor)

	return (
		<Table
			columns={productColumns}
			items={products}
			ariaLabel='Таблица товаров'
			selectionMode='multiple'
			selectedKeys={selectedKeys}
			onSelectionChange={setSelectedKeys}
			sortDescriptor={sortDescriptor}
			onSortChange={setSortDescriptor}
			renderEmptyState={ProductsTableEmpty}
		/>
	)
}
