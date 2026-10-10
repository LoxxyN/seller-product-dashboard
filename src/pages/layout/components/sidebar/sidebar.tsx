import { CircleQuestionMark } from 'lucide-react'
import { Navbar } from '../navbar'

export const Sidebar = () => {
	return (
		<aside className='px-4 py-6 h-full flex flex-col justify-between'>
			<Navbar />

			<footer>
				<div className='mb-4'>
					<a className='text-muted text-sm flex gap-2.5 items-center' href='#'>
						<CircleQuestionMark size={18} />
						Помощь и поддержка
					</a>
				</div>
				<p className='text-muted text-xs'>Кабинет продавца</p>
			</footer>
		</aside>
	)
}
