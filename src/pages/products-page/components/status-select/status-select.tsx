import type { Key } from '@heroui/react'
import { Select } from '@shared/ui'

export interface IStatus {
	id: string
	label: string
}

type StatusSelectProps = {
	statuses: IStatus[]
	value: Key | null
	onChange: (value: Key | null) => void
}

export const StatusSelect: React.FC<StatusSelectProps> = ({ statuses, value, onChange }) => {
	return (
		<>
			<Select<IStatus>
				className='min-w-32 w-fit'
				value={value}
				onChange={onChange}
				items={statuses}
				placeholder='Статус'
			/>
		</>
	)
}
