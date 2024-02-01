import { styled } from '@mui/material'

export const CenteredDiv = styled('div')((props) => ({
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    maxWidth: `${props.theme.breakpoints.values.md}px`,
}))
