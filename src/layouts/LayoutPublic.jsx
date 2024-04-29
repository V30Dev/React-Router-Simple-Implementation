import { Outlet } from "react-router-dom"

const LayoutPublic = () => {
    return (
        <div className="container">
            <Outlet />
            <footer>This is the footer...</footer>
        </div>
    )
}

export default LayoutPublic