import { useContext } from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'

import DataContext from './context/DataContext'
// enable user to navigate in chosen route after successful login
const RequireAuth = () => {
	const { auth } = useContext(DataContext)
	const location = useLocation()

	return (
		auth?.user
			? <Outlet />
			: <Navigate to="/login" state={{ from : location }} replace />
	)
}

export default RequireAuth