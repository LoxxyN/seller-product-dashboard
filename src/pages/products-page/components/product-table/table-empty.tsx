import { Button } from '@heroui/react'

interface ProductsTableEmpty {
	resetFilters: () => void
	hasActiveFilters: boolean
}

export const ProductsTableEmpty: React.FC<ProductsTableEmpty> = ({
	resetFilters,
	hasActiveFilters,
}) => (
	<div className='flex flex-col items-center justify-center py-12'>
		{hasActiveFilters ? (
			<>
				<span className='text-muted text-lg'>
					По выбранным фильтрам ничего не найдено
				</span>
				<span className='text-muted text-sm mt-1 mb-4'>
					Попробуйте изменить параметры фильтрации
				</span>
				<Button variant='ghost' onClick={resetFilters}>
					Сбросить фильтры
				</Button>
			</>
		) : (
			<>
				<span className='text-muted text-lg'>Товаров нет</span>
			</>
		)}
	</div>
)
