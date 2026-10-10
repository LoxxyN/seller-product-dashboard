import { SearchInput } from '@shared/ui'
import { useState } from 'react'

export const ProductFilters = () => {
	const [value, setValue] = useState('')

	return (
		<div className='my-5'>
			<SearchInput
				value={value}
				onChange={newValue => setValue(newValue)}
				placeholder='Поиск по названию или артикулу'
			/>
		</div>
	)
}
