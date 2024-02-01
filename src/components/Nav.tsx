import styled from '@emotion/styled'
import { Button, Dropdown, Menu, MenuButton, MenuItem } from '@mui/base'
import { Typography } from '@mui/material'
import { useMemo } from 'react'
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
        const MenuNavigation = (
            <div key="courseMenu" style={{ display: 'inline' }}>
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
        const ButtonNavigation = Object.entries(ROUTES).map(
            ([key, route], index) => (
                <Button
                    key={route.label}
                    onClick={() => {
                        navigate(route.path)
                    }}
                >
                    <Typography color={theme.palette.text.primary}>
                        {route.label}
                    </Typography>
                </Button>
            )
        )
        ButtonNavigation.splice(1, 0, MenuNavigation) // insert MenuButton at index 1
        return ButtonNavigation
    }, [])

    return (
        <div>
            <StyledNav>{NavigationItems}</StyledNav>
            <Outlet />
        </div>
    )
}

export default Nav
