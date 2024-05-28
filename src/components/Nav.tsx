import { Button } from '@mui/base'
import { styled, Typography } from '@mui/material'
import { CenteredDiv, NAV_HEIGHT } from 'components/ResponsiveComponents'
import LogoIcon from 'icons/PlaceholderLogoIcon'
import { ReactNode, useMemo } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { ROUTES } from 'routes'
import theme, { navBackground } from 'theme'

const StyledNav = styled('nav')((props) => ({
    backgroundColor: navBackground,
    position: 'absolute',
    button: {
        background: 'transparent',
        border: 'none',
        ':hover': {
            cursor: 'pointer',
        },
    },
}))

const OutletWrapper = styled('div')``

const NavWrapper = styled('div')`
    height: ${NAV_HEIGHT};
`

// Main navigation bar
const Nav = () => {
    const navigate = useNavigate()
    const NavigationItems = useMemo(() => {
        const navbarItems: ReactNode[] = []

        //     const CourseMenuWrapper = styled(`div`)`
        //     display: flex;
        // `

        // const MenuNavigation = (
        //     <CourseMenuWrapper key="nav-menu">
        //         <Dropdown>
        //             <MenuButton>
        //                 <Typography color={theme.palette.text.primary}>
        //                     Course
        //                 </Typography>
        //             </MenuButton>
        //             <Menu>
        //                 <MenuItem
        //                     onClick={() =>
        //                         navigate('courses/environment-setup')
        //                     }
        //                 >
        //                     Environment Setup
        //                 </MenuItem>
        //                 <MenuItem>course #1</MenuItem>
        //             </Menu>
        //         </Dropdown>
        //     </CourseMenuWrapper>
        // )

        const LogoIconNavButton = (
            <Button
                key="nav-logo"
                type="button"
                onClick={() => navigate(ROUTES.Main.path)}
            >
                <LogoIcon />
            </Button>
        )

        // ordered route buttons
        const routesToBtn = [
            ROUTES.Roadmap,
            ROUTES.Courses,
            ROUTES.Example,
            ROUTES.Projects,
            ROUTES.Donation,
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
        navbarItems.push(LogoIconNavButton, ...ButtonNavigation)
        return navbarItems
    }, [])

    return (
        <NavWrapper>
            <StyledNav>
                <CenteredDiv>{NavigationItems} </CenteredDiv>
            </StyledNav>
            <OutletWrapper>
                <Outlet />
            </OutletWrapper>
        </NavWrapper>
    )
}

export default Nav
