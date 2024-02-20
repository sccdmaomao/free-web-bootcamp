import { Button, Dropdown, Menu, MenuButton, MenuItem } from '@mui/base'
import { styled, Typography } from '@mui/material'
import { CenteredDiv } from 'components/ResponsiveComponents'
import LogoIcon from 'icons/PlaceholderLogoIcon'
import { ReactNode, useMemo } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { ROUTES } from 'routes'
import theme from 'theme'

import Footer, { FOOTER_HEIGHT } from './Footer'

const StyledNav = styled('nav')((props) => ({
    backgroundColor: theme.palette.background.default,
    padding: '1em',
    button: {
        background: 'transparent',
        border: 'none',
        ':hover': {
            cursor: 'pointer',
        },
    },
}))

// leave margin bottom space for footer
const OutletWrapper = styled('div')`
    padding-bottom: 1em;
    margin-bottom: ${FOOTER_HEIGHT};
`

const CourseMenuWrapper = styled(`div`)`
    display: flex;
`

// Main navigation bar
const Nav = () => {
    const navigate = useNavigate()
    const NavigationItems = useMemo(() => {
        const navbarItems: ReactNode[] = []

        const LogoIconNavButton = (
            <Button
                key="nav-logo"
                type="button"
                onClick={() => navigate(ROUTES.Main.path)}
            >
                <LogoIcon />
            </Button>
        )
        const MenuNavigation = (
            <CourseMenuWrapper key="nav-menu">
                <Dropdown>
                    <MenuButton>
                        <Typography color={theme.palette.text.primary}>
                            Course
                        </Typography>
                    </MenuButton>
                    <Menu>
                        <MenuItem
                            onClick={() =>
                                navigate('courses/environment-setup')
                            }
                        >
                            Environment Setup
                        </MenuItem>
                        <MenuItem>course #1</MenuItem>
                    </Menu>
                </Dropdown>
            </CourseMenuWrapper>
        )
        // ordered route buttons
        const routesToBtn = [
            ROUTES.Roadmap,
            ROUTES.Example,
            ROUTES.Projects,
            ROUTES.Playground,
        ]
        const ButtonNavigation = routesToBtn.map((route) => (
            <Button
                key={`nav-btn-${route.label}`}
                onClick={() => {
                    navigate(route.path)
                }}
            >
                <Typography color={theme.palette.text.primary}>
                    {route.label}
                </Typography>
            </Button>
        ))
        navbarItems.push(LogoIconNavButton, MenuNavigation, ...ButtonNavigation)
        return navbarItems
    }, [])

    return (
        <div>
            <StyledNav>
                <CenteredDiv>{NavigationItems} </CenteredDiv>
            </StyledNav>
            <OutletWrapper>
                <Outlet />
            </OutletWrapper>
            <Footer />
        </div>
    )
}

export default Nav
