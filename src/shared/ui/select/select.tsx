import { Description, Select as HSelect, Label, ListBox } from '@heroui/react'
import { SelectItem } from './select-item'

type SelectProps<Items extends { id: string }> = {
	items: Items[]
	placeholder?: string
	variant?: 'primary' | 'secondary'
	label?: string
	description?: string
}

export const Select = <T extends { id: string }>({
	placeholder,
	variant = 'primary',
	items,
	label,
	description,
}: SelectProps<T>) => {
	return (
		<HSelect variant={variant} placeholder={placeholder}>
			<Label>{label}</Label>
			<HSelect.Trigger>
				<HSelect.Value />
				<HSelect.ClearButton />
				<HSelect.Indicator />
			</HSelect.Trigger>
			<Description>{description}</Description>
			<HSelect.Popover>
				<ListBox>
					{items.map(item => (
						<SelectItem key={item.id} id={item.id} label={item.id} />
					))}
				</ListBox>
			</HSelect.Popover>
		</HSelect>
	)
}
