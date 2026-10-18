import type { Key } from '@heroui/react'
import type { TProductStatus } from '@shared/types'
import { Select } from '@shared/ui'
import { memo } from 'react'

export interface IStatus {
	id: TProductStatus
	label: string
}

interface StatusSelectProps {
	statuses: IStatus[]
	value: Key | null
	onChange: (value: Key | null) => void
}

const StatusSelectComponent: React.FC<StatusSelectProps> = ({
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

export const StatusSelect = memo(StatusSelectComponent)
