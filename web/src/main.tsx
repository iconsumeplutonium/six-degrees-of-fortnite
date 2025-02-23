import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.tsx'
import About from './About.tsx'

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<StrictMode><App /></StrictMode>}/>
			<Route path='about' element={<About />} />
		</Routes>
	</BrowserRouter>,
)
