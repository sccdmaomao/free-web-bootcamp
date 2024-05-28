import { Button, styled } from '@mui/material'
import { NAV_HEIGHT, PageWrapper } from 'components/ResponsiveComponents'
import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import theme, { complementary } from 'theme'
import scrollToSection from 'utils/scrollToSection'

import { Route } from '../index'
import EnvironmentSetup from './courseContent/EnvironmentSetup'

export const CourseRoutes: Route[] = [
    {
        label: 'Environment Setup',
        path: '/courses/environment-setup',
        element: <EnvironmentSetup />,
    },
    {
        label: 'example label',
        path: '/courses/example-route',
        element: <div>example course</div>,
    },
]

const Courses = () => {
    const location = useLocation()
    useEffect(() => {
        const hashId = location.hash.slice(1) // remove hash (#) before id
        if (hashId) {
            scrollToSection(`${hashId}`)
        }
    }, [location.hash])

    return (
        <PageWrapper>
            <CourseList />
            <Outlet />
        </PageWrapper>
    )
}

const ListWrapper = styled('ul')`
    position: absolute;
    height: calc(100vh - ${NAV_HEIGHT});
    background-color: ${complementary};
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: start;
    > li {
        width: 100%;
    }
`

const CourseNavigationButton = styled(Button)`
    color: ${theme.palette.text.primary};
`
const CourseList = () => {
    const navigate = useNavigate()
    return (
        <ListWrapper>
            {CourseRoutes.map((course) => (
                <li key={`course-nav-btn-${course.path}`}>
                    <CourseNavigationButton
                        onClick={() => navigate(course.path)}
                    >
                        {course.label}
                    </CourseNavigationButton>
                </li>
            ))}
        </ListWrapper>
    )
}

export default Courses
