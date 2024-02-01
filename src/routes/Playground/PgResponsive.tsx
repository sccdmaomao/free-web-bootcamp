import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useEffect, useState } from 'react'

import PlaygroundSection from './PlaygroundSection'

function getWindowSize() {
    const { innerWidth, innerHeight } = window
    return { innerWidth, innerHeight }
}
const PgResponsive = () => {
    const theme = useTheme()
    const xsMatcher = useMediaQuery(theme.breakpoints.up('xs'))
    const smMatcher = useMediaQuery(theme.breakpoints.up('sm'))
    const mdMatcher = useMediaQuery(theme.breakpoints.up('md'))
    const lgMatcher = useMediaQuery(theme.breakpoints.up('lg'))
    const xlMatcher = useMediaQuery(theme.breakpoints.up('xl'))
    const [windowSize, setWindowSize] = useState(getWindowSize())

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize())
        }

        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    return (
        <PlaygroundSection sectionTitle="Responsive Design">
            <div>
                Material UI breakpoints:
                <b>{JSON.stringify(theme.breakpoints.values)}</b>
            </div>

            <div>
                Current screen width x height:
                <b>
                    {windowSize.innerWidth} x {windowSize.innerHeight}
                </b>
            </div>

            <div>
                Breakpoint validation:
                <div>
                    {`theme.breakpoints.up('xs') matches: `}
                    <b>{xsMatcher.toString()}</b>
                </div>
                <div>
                    {`theme.breakpoints.up('sm') matches: `}
                    <b>{smMatcher.toString()}</b>
                </div>
                <div>
                    {`theme.breakpoints.up('md') matches: `}
                    <b>{mdMatcher.toString()}</b>
                </div>
                <div>
                    {`theme.breakpoints.up('lg') matches: `}
                    <b>{lgMatcher.toString()}</b>
                </div>
                <div>
                    {`theme.breakpoints.up('xl') matches: `}
                    <b>{xlMatcher.toString()}</b>
                </div>
            </div>
        </PlaygroundSection>
    )
}

export default PgResponsive
