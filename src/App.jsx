import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Blog from "./pages/Blog"
import BlogPost from "./pages/BlogPost"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import LayoutPublic from "./layouts/LayoutPublic"

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<LayoutPublic />} path="/">
          <Route element={<Home />} index></Route>
          <Route element={<Services />} path="/services"></Route>
          <Route element={<Blog />} path="/blog"></Route>
          <Route element={<BlogPost />} path="/blog/:id"></Route>
          <Route element={<Contact />} path="/contact"></Route>
          <Route element={<NotFound />} path="*"></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
