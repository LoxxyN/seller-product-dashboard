import type { Selection, SortDescriptor } from '@heroui/react'
import type { IProduct } from '@shared/types'
import { Table } from '@shared/ui'
import { memo, useEffect, useState } from 'react'
import { productColumns } from './columns'

interface ProductTableProps {
	products: IProduct[]
	sortDescriptor: SortDescriptor
	onSortChange: (descriptor: SortDescriptor) => void
	renderEmptyState?: () => React.ReactNode
	footer?: React.ReactNode
}

const ProductTableComponent: React.FC<ProductTableProps> = ({
	products,
	sortDescriptor,
	onSortChange,
	renderEmptyState,
	footer,
}) => {
	const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set())

	useEffect(() => {
		setSelectedKeys(new Set())
	}, [products])

	return (
		<Table
			classNames={{
				scrollContainer: 'max-h-[585px] h-fit',
				content: 'min-w-[600px]',
			}}
			columns={productColumns}
			items={products}
			ariaLabel='Таблица товаров'
			selectionMode='multiple'
			selectedKeys={selectedKeys}
			onSelectionChange={setSelectedKeys}
			sortDescriptor={sortDescriptor}
			onSortChange={onSortChange}
			renderEmptyState={renderEmptyState}
			footer={footer}
		/>
	)
}

export const ProductTable = memo(ProductTableComponent)
