import { Button } from '@heroui/react'

export const ResetFilterButton = ({ onClick }: { onClick: () => void }) => {
	return (
		<Button onClick={onClick} variant='ghost'>
			Сбросить фильтры
		</Button>
	)
}
