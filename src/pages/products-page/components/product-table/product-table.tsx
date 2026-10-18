import type { Selection, SortDescriptor } from '@heroui/react'
import type { IProduct } from '@shared/types'
import { Table } from '@shared/ui'
import { memo, useEffect, useState } from 'react'
import { productColumns } from './columns'
import { useSortedProducts } from './use-sorted-products'

interface ProductTableProps {
	products: IProduct[]
	renderEmptyState?: () => React.ReactNode
}

const ProductTableComponent: React.FC<ProductTableProps> = ({
	products,
	renderEmptyState,
}) => {
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
			classNames={{ scrollContainer: 'h-[585px]', content: 'min-w-[600px]' }}
			columns={productColumns}
			items={items}
			ariaLabel='Таблица товаров'
			selectionMode='multiple'
			selectedKeys={selectedKeys}
			onSelectionChange={setSelectedKeys}
			sortDescriptor={sortDescriptor}
			onSortChange={setSortDescriptor}
			renderEmptyState={renderEmptyState}
		/>
	)
}

export const ProductTable = memo(ProductTableComponent)
