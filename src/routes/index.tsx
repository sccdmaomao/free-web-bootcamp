import MainPage from './MainPage'
import Playground from './Playground'
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
    Playground: {
        label: 'Playground',
        path: '/playground',
        element: <Playground />,
    },
}

export { MainPage, Playground }
