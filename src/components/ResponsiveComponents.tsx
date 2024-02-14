import { styled } from '@mui/material'

export const CenteredDiv = styled('div')<{ flexDirection?: 'column' | 'row' }>(
    (props) => ({
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        maxWidth: `${props.theme.breakpoints.values.md}px`,
        flexDirection: props.flexDirection,
    })
)
