import { Outlet } from 'react-router-dom'

import { Route } from '../index'
import EnvironmentSetup from './EnvironmentSetup'

export const CourseRoutes: Route[] = [
    {
        label: 'Environment Setup',
        path: '/courses/environment-setup',
        element: <EnvironmentSetup />,
    },
]

const Courses = () => {
    return (
        <div>
            Course Routes
            <Outlet />
        </div>
    )
}

export default Courses
