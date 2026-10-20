import { parseAsInteger, parseAsString, parseAsStringLiteral } from 'nuqs'

export const SORT_COLUMNS = [
	'name',
	'sku',
	'category',
	'price',
	'stock',
	'status',
	'updatedAt',
] as const

export const productParsers = {
	search: parseAsString.withDefault(''),
	category: parseAsString,
	status: parseAsStringLiteral(['active', 'archive', 'draft'] as const),
	stock: parseAsStringLiteral(['in_stock', 'not_in_stock'] as const),
	sort: parseAsStringLiteral(SORT_COLUMNS).withDefault('updatedAt'),
	order: parseAsStringLiteral(['asc', 'desc'] as const).withDefault('desc'),
	page: parseAsInteger.withDefault(1),
	pageSize: parseAsInteger.withDefault(50),
}
