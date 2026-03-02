import { Route, Routes } from 'react-router-dom'
// import './App.css'
import { HomeRoute } from './pages/home/route'
import { EventRoute } from './pages/event/route'
import './index.css'

function App() {

	return (
		<>
			<Routes>
				<Route path='/home' element={<HomeRoute />} />
				<Route path='/event/*' element={<EventRoute />} />
			</Routes>
		</>
	)
}

export default App
