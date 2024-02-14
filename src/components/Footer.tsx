import { UnfoldLess, UnfoldMore } from '@mui/icons-material'
import { IconButton, styled } from '@mui/material'
import { useState } from 'react'

export const FOOTER_HEIGHT = '20vh'

const FooterWrapper = styled('div')<{ hide?: boolean }>((props) => ({
    position: 'fixed',
    height: props.hide ? 'auto' : FOOTER_HEIGHT,
    width: '100vw',
    background: props.theme.palette.background.default,
    bottom: 0,
}))

const Footer = () => {
    const [minimized, setMinimized] = useState(false)
    return (
        <FooterWrapper hide={minimized}>
            <IconButton onClick={() => setMinimized(!minimized)} size="small">
                {minimized ? (
                    <UnfoldMore fontSize="small" />
                ) : (
                    <UnfoldLess fontSize="small" />
                )}
            </IconButton>
            Footer
        </FooterWrapper>
    )
}

export default Footer
