import styled from '@emotion/styled'
import { Button, Dropdown, Menu, MenuButton, MenuItem } from '@mui/base'
import { Typography } from '@mui/material'
import { CenteredDiv } from 'components/ResponsiveComponents'
import LogoIcon from 'icons/PlaceholderLogoIcon'
import { ReactNode, useMemo } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { ROUTES } from 'routes'
import theme, { primary } from 'theme'

const StyledNav = styled('nav')`
    background-color: ${primary};
    padding: 1em;
`

// Main navigation bar
const Nav = () => {
    const navigate = useNavigate()
    const NavigationItems = useMemo(() => {
        const navbarItems: ReactNode[] = []

        const LogoIconNavButton = (
            <Button key="nav-logo" onClick={() => navigate(ROUTES.Main.path)}>
                <LogoIcon />
            </Button>
        )
        const MenuNavigation = (
            <div key="nav-menu" style={{ display: 'inline' }}>
                <Dropdown>
                    <MenuButton>
                        <Typography color={theme.palette.text.primary}>
                            Course
                        </Typography>
                    </MenuButton>
                    <Menu>
                        <MenuItem>course #1</MenuItem>
                    </Menu>
                </Dropdown>
            </div>
        )
        const routesToBtn = [
            ROUTES.Roadmap,
            ROUTES.Contact,
            ROUTES.Example,
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

            <Outlet />
        </div>
    )
}

export default Nav
