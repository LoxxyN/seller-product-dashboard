import { Label, ListBox } from '@heroui/react'

type SelectItemProps = {
	id: string
	label: string
}

export const SelectItem: React.FC<SelectItemProps> = ({ id, label }) => {
	return (
		<ListBox.Item id={id} textValue={label}>
			<Label>{label}</Label>
			<ListBox.ItemIndicator />
		</ListBox.Item>
	)
}
