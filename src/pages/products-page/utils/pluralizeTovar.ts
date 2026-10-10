/**
 * Возвращает нужную форму слова, либо форму слова вместе с числом
 * @param n number
 * @param includeNumber boolean
 * @returns string
 */

export function pluralizeTovar(n: number, includeNumber: boolean = true) {
	n = Math.abs(Math.trunc(n))
	const lastTwo = n % 100
	const lastOne = n % 10

	let word
	if (lastTwo >= 11 && lastTwo <= 14) {
		word = 'товаров'
	} else if (lastOne === 1) {
		word = 'товар'
	} else if (lastOne >= 2 && lastOne <= 4) {
		word = 'товара'
	} else {
		word = 'товаров'
	}

	return includeNumber ? `${n} ${word}` : word
}
