export type TProductStatus = 'active' | 'archive' | 'draft'
export type TProductStatusFilter = TProductStatus | 'all'

export interface IProduct {
	id: string
	name: string
	sku: string
	category: string
	price: number
	stock: number
	status: TProductStatus
	updatedAt: string
	imageUrl?: string
}
