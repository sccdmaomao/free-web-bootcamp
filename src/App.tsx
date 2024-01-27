import GlobalStyles from '@mui/material/GlobalStyles'
import { ThemeProvider } from '@mui/material/styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {
    const router = createBrowserRouter([
        {
            path: `/`,
            element: <div>Hello world</div>
            // children: [
            //     {
            //         path: '',
            //         element: <LandingPage />,
            //     },
            //     {
            //         path: '/schedule',
            //         element: <SchedulePage />,
            //     },
            //     { path: '/curriculum/:unit?', element: <div>curriculum</div> },
            //     { path: '/projects', element: <ProjectsPage /> },
            //     { path: '/faq', element: <FaqPage /> },
            // ],
        }
    ])
    return (
        <>
            <GlobalStyles
                styles={{ body: { margin: 0, userSelect: 'none' } }}
            />
            <RouterProvider router={router} />
        </>
    ) 
}

export default App
