import { Avatar, Button, Checkbox } from '@heroui/react'
import type { IProduct } from '@shared/types'
import { MoreHorizontal } from 'lucide-react'

const LOW_STOCK_THRESHOLD = 5

interface IProductCellProps {
	item: IProduct
}

interface ISelectionCheckboxProps {
	label: string
	variant?: React.ComponentProps<typeof Checkbox>['variant']
}

export const SelectionCheckbox: React.FC<ISelectionCheckboxProps> = ({
	label,
	variant,
}) => (
	<Checkbox aria-label={label} slot='selection' variant={variant}>
		<Checkbox.Content>
			<Checkbox.Control>
				<Checkbox.Indicator />
			</Checkbox.Control>
		</Checkbox.Content>
	</Checkbox>
)

export const NameCell: React.FC<IProductCellProps> = ({ item }) => (
	<div className='flex items-center gap-3'>
		<Avatar className='size-10'>
			<Avatar.Image alt={item.name} src={item.imageUrl} />
		</Avatar>
		<div className='flex flex-col'>
			<span className='font-medium text-foreground'>{item.name}</span>
			<span className='text-sm text-muted'>{item.sku}</span>
		</div>
	</div>
)

export const StockCell: React.FC<IProductCellProps> = ({ item }) => (
	<span
		className={
			item.stock <= LOW_STOCK_THRESHOLD ? 'text-warning font-medium' : ''
		}
	>
		{item.stock > 0 ? item.stock : 'Нет в наличии'}
	</span>
)

export const ActionsCell: React.FC = () => (
	<div className='flex justify-end'>
		<Button isIconOnly variant='ghost' size='sm'>
			<MoreHorizontal />
		</Button>
	</div>
)
