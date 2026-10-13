import { SearchInput } from '@shared/ui'

interface SearchProps {
	value: string
	onChange: (value: string) => void
	onSubmit?: (value: string) => void
}

export const Search: React.FC<SearchProps> = ({ value, onChange, onSubmit }) => {
	return (
		<SearchInput
			className='w-1/3'
			value={value}
			onChange={onChange}
			onSubmit={onSubmit}
			placeholder='Поиск по названию или артикулу'
		/>
	)
}
