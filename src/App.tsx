import {  Route, Routes } from 'react-router-dom'
// import './App.css'
import { HomeRoute } from './pages/home/route'
import './index.css'

function App() {

	return (
		<>
		<Routes>
			<Route path='/home' element={<HomeRoute/>}/>
		</Routes>
		</>
	)
}

export default App
