import { createTheme } from '@mui/material/styles'

import {
    accent,
    background,
    complementary,
    primary,
    secondary,
    text,
} from './index'

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: primary,
        },
        secondary: {
            main: secondary,
        },
        error: {
            main: '#e74c3c',
        },
        background: {
            default: background,
        },
        text: {
            primary: text,
        },
        // @ts-expect-error
        accent: {
            main: accent,
        },
    },
})

export default theme
