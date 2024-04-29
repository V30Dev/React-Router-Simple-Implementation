import { useParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const BlogPost = () => {

    const params = useParams()
    const { data, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    if (loading) return <p>Loading data...</p>
    if (error) return <p>{error}</p>

    return (
        <>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
            <Link className='btn btn-dark' to={'/blog'}>Return to Blog</Link>
        </>
    )
}

export default BlogPost