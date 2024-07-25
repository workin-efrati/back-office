import { Route, Routes } from "react-router-dom"
import Articles from "./outlet/Articles/articles"
import Dashboard from "./outlet/Dashboard/dashboard"
import Editors from "./outlet/Editors/editors"
import Questions from "./outlet/Questions/questions"
import Tags from "./outlet/Tags/tags"
import Video from "./outlet/Video/video"
import Home from "./pages/Home/home"
import Login from "./pages/Login/login"
import Test from "./tests"

export default function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Home />}>
          <Route index element={<Dashboard />} />
          <Route path="editors-view" element={<Editors />} />
          <Route path="tags-view" element={<Tags />} />
          <Route path="questions-view" element={<Questions />} />
          <Route path="articles-view" element={<Articles />} />
          <Route path="test" element={<Test />} />
          <Route path="video-view" element={<Video />} />
        </Route>
      </Routes>
    </div>
  )
}
