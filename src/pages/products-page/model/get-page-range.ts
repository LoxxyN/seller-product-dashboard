/**
 * Строит список для пагинации: первая и последняя страницы всегда видны,
 * вокруг текущей показываются `siblings` соседей, пропуски заменяются многоточием.
 * Если пропущена ровно одна страница, показывается она сама, а не многоточие.
 *
 * Пример (siblings = 1, 965 страниц): страница 1 -> 1 2 3 … 965,
 * страница 10 -> 1 … 9 10 11 … 965.
 */

export type TPageRangeItem = number | 'ellipsis-start' | 'ellipsis-end'

export const getPageRange = (
	page: number,
	totalPages: number,
	siblings = 1,
): TPageRangeItem[] => {
	const last = Math.max(1, totalPages)
	const windowSize = siblings * 2
	const start = Math.min(
		Math.max(page - siblings, 1),
		Math.max(last - windowSize, 1),
	)
	const end = Math.min(start + windowSize, last)

	const items: TPageRangeItem[] = []

	if (start > 1) {
		items.push(1)

		const gap = start - 2

		if (gap === 1) items.push(2)
		else if (gap > 1) items.push('ellipsis-start')
	}

	for (let current = start; current <= end; current++) {
		items.push(current)
	}

	if (end < last) {
		const gap = last - end - 1

		if (gap === 1) items.push(end + 1)
		else if (gap > 1) items.push('ellipsis-end')

		items.push(last)
	}

	return items
}
