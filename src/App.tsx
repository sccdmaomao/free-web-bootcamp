import GlobalStyles from '@mui/material/GlobalStyles'
import { ThemeProvider } from '@mui/material/styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainPage, Playground, ROUTES } from 'routes'
import theme from 'theme'

import Nav from './components/Nav'

const App = () => {
    const router = createBrowserRouter([
        {
            path: `/`,
            element: <Nav />,
            children: [
                {
                    path: ROUTES.Main.path,
                    element: <MainPage />,
                },
                {
                    path: ROUTES.Roadmap.path,
                    element: <div>road map</div>,
                },
                {
                    path: ROUTES.Example.path,
                    element: <div>example</div>,
                },
                {
                    path: ROUTES.Support.path,
                    element: <div>support</div>,
                },
                {
                    path: ROUTES.Contact.path,
                    element: <div>contact</div>,
                },
                {
                    path: ROUTES.Playground.path,
                    element: <Playground />,
                },
            ],
        },
    ])
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles
                styles={{
                    body: {
                        margin: 0,
                        backgroundColor: theme.palette.background.default,
                    },
                }}
            />
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

export default App
