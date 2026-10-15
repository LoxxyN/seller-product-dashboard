import type { Key } from '@heroui/react'
import type { TProductStatus } from '@shared/types'
import { Select } from '@shared/ui'

export interface IStatus {
	id: TProductStatus
	label: string
}

interface StatusSelectProps {
	statuses: IStatus[]
	value: Key | null
	onChange: (value: Key | null) => void
}

export const StatusSelect: React.FC<StatusSelectProps> = ({
	statuses,
	value,
	onChange,
}) => {
	return (
		<>
			<Select<IStatus>
				className='min-w-36 w-fit'
				value={value}
				onChange={onChange}
				items={statuses}
				placeholder='Статус'
			/>
		</>
	)
}
