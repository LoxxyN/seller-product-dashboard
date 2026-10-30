import { Card, Chip } from '@heroui/react'
import { ArrowDown, ArrowUp } from 'lucide-react'

interface InfoCardProps {
	title: string
	content: React.ReactNode
	percent: number
	isPositivePercent?: boolean
}

export const InfoCard = ({
	title,
	content,
	percent,
	isPositivePercent = true,
}: InfoCardProps) => {
	return (
		<Card className='w-full'>
			<Card.Header>
				<Card.Title className='text-sm text-muted'>{title}</Card.Title>
			</Card.Header>
			<Card.Content className='text-3xl font-semibold'>{content}</Card.Content>
			<Card.Footer className='flex gap-2'>
				{isPositivePercent ? (
					<Chip
						color='success'
						variant='soft'
						className='flex gap-1 text-sm font-medium'
					>
						<ArrowUp size={14} /> {percent}
					</Chip>
				) : (
					<Chip
						color='danger'
						variant='soft'
						className='flex gap-1 text-sm font-medium'
					>
						<ArrowDown size={14} /> {percent}
					</Chip>
				)}
				<p className='text-muted text-sm'>к предыдущему периоду</p>
			</Card.Footer>
		</Card>
	)
}
