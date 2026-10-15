import { CloseButton } from '@heroui/react'

interface SelectedFilterProps {
	categoryName: string | undefined
	selectedFilter: string | undefined
	onClick: () => void
}

export const SelectedFilter: React.FC<SelectedFilterProps> = ({
	categoryName,
	selectedFilter,
	onClick,
}) => {
	return (
		<div className='flex items-center gap-2 px-2 py-1.5 rounded-lg bg-field-hover shadow'>
			<span className='text-sm'>
				{categoryName}: {selectedFilter}
			</span>
			<CloseButton onPress={onClick} className='size-5' />
		</div>
	)
}
