import { Navigate, Route, Routes } from 'react-router-dom'
// import './App.css'
import { HomeRoute } from './pages/home/route'
import { EventRoute } from './pages/event/route'
import { ProblemRoute } from './pages/problem/route'
import './index.css'

function App() {

	return (
		<>
			<Routes>
				<Route path='/home' element={<HomeRoute />} />
				<Route path='/event/*' element={<EventRoute />} />
				<Route path='/problem/*' element={<ProblemRoute />} />
				<Route path='*' element={<Navigate to='/home' replace />} />
			</Routes>
		</>
	)
}

export default App
