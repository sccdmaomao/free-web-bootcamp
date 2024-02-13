import GlobalStyles from '@mui/material/GlobalStyles'
import { ThemeProvider } from '@mui/material/styles'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { ROUTES } from 'routes'
import theme, { primary } from 'theme'

import Nav from './components/Nav'

const App = () => {
    const router = createBrowserRouter([
        {
            path: `/`,
            element: <Nav />,
            children: Object.entries(ROUTES).map(([_, route]) => ({
                path: route.path,
                element: route.element,
            })),
            errorElement: <Navigate replace to="/" />,
        },
    ])
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles
                styles={{
                    body: {
                        margin: 0,
                        backgroundColor: primary,
                        color: theme.palette.text.primary,
                    },
                }}
            />
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

export default App
