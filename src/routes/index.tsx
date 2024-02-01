import MainPage from './MainPage'
import Playground from './Playground'

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

        element: <div>road map</div>,
    },
    Example: {
        label: 'Example',
        path: '/examples',
        element: <div>example</div>,
    },
    Contact: {
        label: 'Contact',
        path: '/contact',
        element: <div>contact</div>,
    },
    Playground: {
        label: 'Playground',
        path: '/playground',
        element: <Playground />,
    },
}

export { MainPage, Playground }
