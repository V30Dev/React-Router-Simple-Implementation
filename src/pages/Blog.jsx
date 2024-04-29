import { useFetch } from "../hooks/useFetch"
import { Link, useSearchParams } from "react-router-dom"

const Blog = () => {

    //Search Params filter
    const [searchParams, setSearchParams] = useSearchParams()

    const handleInput = (e) => {
        let search = e.target.value

        if (search) {
            setSearchParams({ filter: search })
        } else {
            setSearchParams({})
        }
    }

    //Fetch data
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts')

    if (loading) return <p>Loading data...</p>
    if (error) return <p>{error}</p>

    return (
        <>
            <h1>Blog</h1>
            <input type="text" onChange={handleInput} value={searchParams.get('filter') || ''} className="form-control my-3" />
            <ul className="list-group">
                {data.filter(item => {
                    let search = searchParams.get("filter");
                    if (!search) { return true }
                    let name = item.title.toLowerCase();
                    return name.startsWith(search.toLowerCase());
                }).map(post => (
                    <li key={post.id} className="list-group-item">
                        <Link to={`/blog/${post.id}`}>{post.id} - {post.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Blog