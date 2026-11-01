export interface IProductDTO {
	id: string
	product_name: string
	sku_code: string
	category_name: string
	unit_price: number
	stock_quantity: number
	publication_status: string
	updated_at: string
	image_url?: string | null
}
