import { styled } from '@mui/material'

// import { NAV_HEIGHT } from './Nav'

export const NAV_HEIGHT = '50px'

export const CenteredDiv = styled('div')<{ flexDirection?: 'column' | 'row' }>(
    (props) => ({
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        maxWidth: `${props.theme.breakpoints.values.md}px`,
        flexDirection: props.flexDirection,
    })
)

export const PageWrapper = styled('div')`
    padding-top: ${NAV_HEIGHT};
`
