import type { IProduct } from '@shared/types'
import type { TableColumn } from '@shared/ui'
import { formatDate, formatPrice } from '../../utils'
import { TableStatusChip } from '../table-status-chip'
import { ActionsCell, NameCell, SelectionCheckbox, StockCell } from './cells'

// Держим на уровне модуля: стабильная ссылка, коллекция не перестраивается на каждый рендер
export const productColumns: TableColumn<IProduct>[] = [
	{
		id: 'selection',
		label: '',
		isCustom: true,
		renderHeader: () => <SelectionCheckbox label='Выбрать все' />,
		renderCell: item => <SelectionCheckbox label={`Выбрать ${item.name}`} variant='secondary' />,
	},
	{
		id: 'name',
		label: 'Товар',
		isRowHeader: true,
		allowsSorting: true,
		renderCell: item => <NameCell item={item} />,
	},
	{
		id: 'category',
		label: 'Категория',
		renderCell: item => <span className='text-muted'>{item.category}</span>,
	},
	{
		id: 'price',
		label: 'Цена',
		allowsSorting: true,
		renderCell: item => <span className='font-medium'>{formatPrice(item.price)}</span>,
	},
	{
		id: 'stock',
		label: 'Остаток',
		allowsSorting: true,
		renderCell: item => <StockCell item={item} />,
	},
	{
		id: 'status',
		label: 'Статус',
		renderCell: item => <TableStatusChip status={item.status} />,
	},
	{
		id: 'updatedAt',
		label: 'Обновлён',
		allowsSorting: true,
		renderCell: item => <span className='text-muted'>{formatDate(item.updatedAt)}</span>,
	},
	{
		id: 'actions',
		label: '',
		isCustom: true,
		renderHeader: () => null,
		renderCell: () => <ActionsCell />,
	},
]
