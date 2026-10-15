/**
 * Форматирует цену в формат <цена>₽
 * @param price number
 * @returns string
 */

export function formatPrice(price: number): string {
	return `${price.toLocaleString('ru-RU')} ₽`
}
