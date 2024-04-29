import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <>
            <h1>Error 404</h1>
            <h3>Not Found</h3>
            <Link className='btn btn-dark' to={'/'}>Go Home</Link>
        </>
    )
}

export default NotFound