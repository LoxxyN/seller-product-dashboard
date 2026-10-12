import { Chip } from '@heroui/react'
import type { TProductStatus } from '@shared/types'

type TLabel = 'Активно' | 'Архив' | 'Черновик'
type TColor = 'success' | 'default' | 'danger'

type TableStatusChipProps = {
	status: TProductStatus
}

const labelMap: Record<TProductStatus, TLabel> = {
	active: 'Активно',
	archive: 'Архив',
	draft: 'Черновик',
}

const colorMap: Record<TProductStatus, TColor> = {
	active: 'success',
	archive: 'default',
	draft: 'danger',
}

export const TableStatusChip: React.FC<TableStatusChipProps> = ({ status }) => {
	return (
		<Chip variant='secondary' color={colorMap[status]}>
			{labelMap[status]}
		</Chip>
	)
}
