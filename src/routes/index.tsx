import MainPage from './MainPage'
import Playground from './Playground'
import ProjectPage from './ProjectPage'
import RoadmapPage from './RoadmapPage'

// Object used in App.tsx to define valid routes
export const ROUTES = {
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
}

export { MainPage, Playground }
