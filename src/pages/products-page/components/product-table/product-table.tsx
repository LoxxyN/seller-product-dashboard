import type { Selection, SortDescriptor } from '@heroui/react'
import type { IProduct } from '@shared/types'
import { Table } from '@shared/ui'
import { useEffect, useState } from 'react'
import { productColumns } from './columns'
import { ProductsTableEmpty } from './table-empty'
import { useSortedProducts } from './use-sorted-products'

interface ProductTableProps {
	products: IProduct[]
}

export const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
	const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set())
	const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
		column: 'updatedAt',
		direction: 'descending',
	})

	const items = useSortedProducts(products, sortDescriptor)

	useEffect(() => {
		setSelectedKeys(new Set())
	}, [products])

	return (
		<Table
			columns={productColumns}
			items={items}
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
