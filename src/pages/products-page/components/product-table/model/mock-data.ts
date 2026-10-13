import type { IProduct } from '@shared/types'

export const mockProducts: IProduct[] = [
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
		sku: 'DM-TP-026-B',
		category: 'Посуда',
		price: 1590,
		stock: 2,
		status: 'archive',
		updatedAt: '2026-10-09T09:00:00Z',
	},
]
