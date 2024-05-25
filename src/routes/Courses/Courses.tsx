import { Button, styled } from '@mui/material'
import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import theme, { complementary } from 'theme'
import scrollToSection from 'utils/scrollToSection'

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

    useEffect(() => {
        scrollToSection(`${location.hash.slice(1)}`) // remove hash (#) before id
    }, [location.hash])

    return isTopLevel ? (
        <ListWrapper>{renderCourses()}</ListWrapper>
    ) : (
        <Outlet />
    )
}

export default Courses
