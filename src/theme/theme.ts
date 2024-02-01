import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: '#3498db', // Dodger Blue
        },
        secondary: {
            main: '#2ecc71', // Emerald Green
        },
        error: {
            main: '#e74c3c', // Alizarin Red
        },
        background: {
            default: '#f8f9fa', // Light Gray
        },
        text: {
            primary: '#333333', // Dark Gray
        },
        // @ts-expect-error
        accent: {
            main: '#f39c12', // Orange
        },
    },
})

export default theme
