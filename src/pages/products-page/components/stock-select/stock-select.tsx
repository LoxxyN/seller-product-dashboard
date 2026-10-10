import type { Key } from '@heroui/react'
import { Select } from '@shared/ui'

export interface IStock {
	id: string
	label: string
}

type StockSelectProps = {
	stock: IStock[]
	value: Key | null
	onChange: (value: Key | null) => void
}

export const StockSelect: React.FC<StockSelectProps> = ({
	stock,
	value,
	onChange,
}) => {
	return (
		<>
			<Select<IStock>
				className='min-w-40 w-fit'
				value={value}
				onChange={onChange}
				items={stock}
				placeholder='Наличие'
			/>
		</>
	)
}
