import { useEffect, useState } from 'react'

export function useDebounce<T>(value: T, delay: number = 300) {
	const [debounce, setDebounce] = useState(value)

	useEffect(() => {
		const timerId = setTimeout(() => setDebounce(value), delay)

		return () => clearTimeout(timerId)
	}, [value, delay])

	return debounce
}
