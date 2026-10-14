import { Button } from '@heroui/react'
import { mockProducts } from '@shared/lib'
import { Plus } from 'lucide-react'
import { useMemo, useState } from 'react'
import { PageHeading, ProductFilters, ProductTable } from './components'

const productQuantity = mockProducts.length

// Создание списка уникальных категорий
const categories = [...new Set(mockProducts.map(product => product.category))]

export const ProductsPage = () => {
	const [category, setCategory] = useState<string | null>(null)

	const filteredProducts = useMemo(
		() => (category ? mockProducts.filter(param => param.category === category) : mockProducts),
		[category],
	)

	return (
		<div>
			<div className='flex flex-col mb-5'>
				<PageHeading
					productQuantity={productQuantity}
					actionButtonSlot={
						<Button>
							<Plus />
							Добавить товар
						</Button>
					}
				/>
				<ProductFilters
					categories={categories}
					category={category}
					onCategoryChange={newValue => setCategory(newValue)}
				/>
			</div>

			<ProductTable products={filteredProducts} />
		</div>
	)
}
