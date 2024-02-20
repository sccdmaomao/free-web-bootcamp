import { ReactNode } from 'react'

import Courses, { CourseRoutes } from './Courses/Courses'
import MainPage from './MainPage'
import Playground from './Playground'
import ProjectPage from './ProjectPage'
import RoadmapPage from './RoadmapPage'

export interface Route {
    label: string
    path: string
    element: ReactNode
    children?: Route[]
}

// Object used in App.tsx to define valid routes
export const ROUTES: Record<string, Route> = {
    Main: {
        label: 'Introduction',
        path: '',
        element: <MainPage />,
    },
    Roadmap: {
        label: 'Roadmap',
        path: '/roadmap',

        element: <RoadmapPage />,
    },
    Example: {
        label: 'Example',
        path: '/examples',
        element: <div>example</div>,
    },
    Projects: {
        label: 'Projects',
        path: 'projects',
        element: <ProjectPage />,
    },
    Playground: {
        label: 'Playground',
        path: '/playground',
        element: <Playground />,
    },
    Courses: {
        label: 'Courses',
        path: '/courses',
        element: <Courses />,
        children: CourseRoutes,
    },
}

export { CourseRoutes, MainPage, Playground }
