import {
	Description,
	Select as HSelect,
	Label,
	ListBox,
	type Key,
} from '@heroui/react'
import { SelectItem } from './select-item'

interface SelectItem {
	id: string
	label: string
}

interface SelectProps<Items extends SelectItem> {
	placeholder?: string
	variant?: 'primary' | 'secondary'
	label?: string
	description?: string
	className?: string
	fullWidth?: boolean
	items: Items[]
	hasClearButton?: boolean
	value: Key | null
	onChange: (value: Key | null) => void
}

export const Select = <T extends SelectItem>({
	fullWidth = false,
	placeholder,
	variant = 'primary',
	items,
	label,
	description,
	value,
	className,
	onChange,
	hasClearButton = false,
}: SelectProps<T>) => {
	return (
		<HSelect
			className={className}
			fullWidth={fullWidth}
			value={value}
			onChange={onChange}
			variant={variant}
			placeholder={placeholder}
		>
			<Label>{label}</Label>
			<HSelect.Trigger>
				<HSelect.Value />
				{hasClearButton && <HSelect.ClearButton />}
				<HSelect.Indicator />
			</HSelect.Trigger>
			<Description>{description}</Description>
			<HSelect.Popover>
				<ListBox>
					{items.map(item => (
						<SelectItem key={item.id} id={item.id} label={item.label} />
					))}
				</ListBox>
			</HSelect.Popover>
		</HSelect>
	)
}
