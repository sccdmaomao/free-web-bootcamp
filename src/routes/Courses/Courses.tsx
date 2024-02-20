import { Button, styled } from '@mui/material'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import theme, { complementary } from 'theme'

import { Route } from '../index'
import EnvironmentSetup from './EnvironmentSetup'

export const CourseRoutes: Route[] = [
    {
        label: 'Environment Setup',
        path: '/courses/environment-setup',
        element: <EnvironmentSetup />,
    },
]

const ListWrapper = styled('div')`
    margin-top: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CourseNavigationButton = styled(Button)`
    color: ${theme.palette.text.primary};
    background-color: ${complementary};
`

const Courses = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const isTopLevel = location.pathname === '/courses'

    const renderCourses = () => {
        return CourseRoutes.map((course) => (
            <CourseNavigationButton
                key={`course-nav-btn-${course.path}`}
                onClick={() => navigate(course.path)}
            >
                {course.label}
            </CourseNavigationButton>
        ))
    }

    return isTopLevel ? (
        <ListWrapper>{renderCourses()}</ListWrapper>
    ) : (
        <Outlet />
    )
}

export default Courses
