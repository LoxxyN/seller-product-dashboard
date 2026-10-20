import { NuqsAdapter } from 'nuqs/adapters/react-router/v7'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Router } from './Router'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<NuqsAdapter>
			<Router />
		</NuqsAdapter>
	</StrictMode>,
)
