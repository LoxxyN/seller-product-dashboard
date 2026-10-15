import type { Key } from '@heroui/react'
import { Select } from '@shared/ui'
import type { TStockFilter } from '../../model/filters'

export interface IStock {
	id: TStockFilter
	label: string
}

interface StockSelectProps {
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
				className='min-w-42 w-fit'
				value={value}
				onChange={onChange}
				items={stock}
				placeholder='Наличие'
			/>
		</>
	)
}
