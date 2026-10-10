import { Button } from '@heroui/react'
import { Plus } from 'lucide-react'
import { PageHeading } from './components'

export const ProductsPage = () => {
	return (
		<>
			<PageHeading
				productQuantity={48213}
				actionButtonSlot={
					<Button>
						<Plus />
						Добавить товар
					</Button>
				}
			/>
		</>
	)
}
