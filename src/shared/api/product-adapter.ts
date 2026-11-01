import type { IProduct, IProductDTO, TProductStatus } from '@shared/types'

const STATUSES: TProductStatus[] = ['active', 'archive', 'draft']

const toStatus = (value: string): TProductStatus =>
	STATUSES.includes(value as TProductStatus)
		? (value as TProductStatus)
		: 'draft'

const adaptProduct = (dto: IProductDTO) => ({
	id: dto.id,
	name: dto.product_name,
	sku: dto.sku_code,
	category: dto.category_name,
	price: dto.unit_price,
	stock: dto.stock_quantity,
	status: toStatus(dto.publication_status),
	updatedAt: dto.updated_at,
	imageUrl: dto.image_url ?? undefined,
})

export const adaptProducts = (dtos: IProductDTO[]): IProduct[] =>
	dtos.map(adaptProduct)
