import { Outlet, useNavigate } from 'react-router-dom'
import { ROUTES } from 'routes'

const Nav = () => {
    const navigate = useNavigate()
    return (
        <div>
            <nav>
                {Object.entries(ROUTES).map(([key, route], index) => (
                    <button
                        key={route.label}
                        onClick={() => {
                            navigate(route.path)
                        }}
                    >
                        {route.label}
                    </button>
                ))}
            </nav>
            <Outlet />
        </div>
    )
}

export default Nav
