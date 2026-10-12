import type { Selection, SortDescriptor } from '@heroui/react'
import { Avatar, Button, Checkbox } from '@heroui/react'
import type { IProduct } from '@shared/types'
import type { TableColumn } from '@shared/ui'
import { Table } from '@shared/ui'
import { MoreHorizontal } from 'lucide-react'
import { useState } from 'react'
import { formatDate, formatPrice } from '../../utils'
import { TableStatusChip } from '../table-status-chip'

const LOW_STOCK_THRESHOLD = 5

const mockProducts: IProduct[] = [
	{
		id: '1',
		name: 'Кружка керамическая, 350 мл',
		sku: 'DM-KP-035',
		category: 'Посуда',
		price: 1290,
		stock: 124,
		status: 'active',
		updatedAt: '2026-10-09T10:00:00Z',
	},
	{
		id: '2',
		name: 'Тарелка обеденная, 26 см',
		sku: 'DM-TP-026',
		category: 'Посуда',
		price: 1590,
		stock: 8,
		status: 'draft',
		updatedAt: '2026-10-09T09:00:00Z',
	},
	{
		id: '3',
		name: 'Тарелка обеденная, 26 см',
		sku: 'DM-TP-026',
		category: 'Посуда',
		price: 1590,
		stock: 2,
		status: 'archive',
		updatedAt: '2026-10-09T09:00:00Z',
	},
]

const columns: TableColumn<IProduct>[] = [
	{
		id: 'selection',
		label: '',
		isCustom: true,
		renderHeader: () => (
			<Checkbox aria-label='Выбрать все' slot='selection'>
				<Checkbox.Content>
					<Checkbox.Control>
						<Checkbox.Indicator />
					</Checkbox.Control>
				</Checkbox.Content>
			</Checkbox>
		),
	},
	{ id: 'name', label: 'Товар', isRowHeader: true },
	{ id: 'category', label: 'Категория' },
	{ id: 'price', label: 'Цена' },
	{ id: 'stock', label: 'Остаток' },
	{ id: 'status', label: 'Статус' },
	{
		id: 'updatedAt',
		label: 'Обновлён',
	},
	{
		id: 'actions',
		label: '',
		isCustom: true,
		renderHeader: () => null,
	},
]

export const ProductTable: React.FC = () => {
	const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set())
	const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
		column: 'updatedAt',
		direction: 'descending',
	})

	const sortedProducts = mockProducts.toSorted((a, b) => {
		const aVal = new Date(
			a[sortDescriptor.column as keyof IProduct] as string,
		).getTime()
		const bVal = new Date(
			b[sortDescriptor.column as keyof IProduct] as string,
		).getTime()
		return sortDescriptor.direction === 'descending' ? bVal - aVal : aVal - bVal
	})

	return (
		<Table
			columns={columns}
			items={sortedProducts}
			ariaLabel='Таблица товаров'
			selectionMode='multiple'
			selectedKeys={selectedKeys}
			onSelectionChange={setSelectedKeys}
			sortDescriptor={sortDescriptor}
			onSortChange={setSortDescriptor}
			renderCell={(item, column) => {
				if (column.id === 'selection') {
					return (
						<div className='pe-0'>
							<Checkbox
								aria-label={`Выбрать ${item.name}`}
								slot='selection'
								variant='secondary'
							>
								<Checkbox.Content>
									<Checkbox.Control>
										<Checkbox.Indicator />
									</Checkbox.Control>
								</Checkbox.Content>
							</Checkbox>
						</div>
					)
				}

				if (column.id === 'actions') {
					return (
						<div className='flex justify-end'>
							<Button isIconOnly variant='ghost' size='sm'>
								<MoreHorizontal />
							</Button>
						</div>
					)
				}

				if (column.id === 'name') {
					return (
						<div className='flex items-center gap-3'>
							<Avatar className='size-10'>
								<Avatar.Image alt={item.name} src={item.imageUrl} />
							</Avatar>
							<div className='flex flex-col'>
								<span className='font-medium text-foreground'>{item.name}</span>
								<span className='text-sm text-muted'>{item.sku}</span>
							</div>
						</div>
					)
				}

				if (column.id === 'category') {
					return <span className='text-muted'>{item.category}</span>
				}

				if (column.id === 'price') {
					return <span className='font-medium'>{formatPrice(item.price)}</span>
				}

				if (column.id === 'stock') {
					return (
						<span
							className={
								item.stock <= LOW_STOCK_THRESHOLD
									? 'text-warning font-medium'
									: ''
							}
						>
							{item.stock > 0 ? item.stock : 'Нет в наличии'}
						</span>
					)
				}

				if (column.id === 'status') {
					return <TableStatusChip status={item.status} />
				}

				if (column.id === 'updatedAt') {
					return (
						<span className='text-muted'>{formatDate(item.updatedAt)}</span>
					)
				}

				return null
			}}
			renderEmptyState={() => (
				<div className='flex flex-col items-center justify-center py-12'>
					<span className='text-muted text-lg'>Товары не найдены</span>
					<span className='text-muted text-sm mt-1'>
						Попробуйте изменить параметры фильтрации
					</span>
				</div>
			)}
		/>
	)
}
