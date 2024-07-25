import { createBrowserRouter, Route, Router, RouterProvider, Routes } from "react-router-dom"
import Yosef from "./tests/Yosef"
import Login from "./pages/Login/login"
import Dashboard from "./outlet/Dashboard/dashboard"
import Editors from "./outlet/Editors/editors"
import Tags from "./outlet/Tags/tags"
import Questions from "./outlet/Questions/questions"
import Articles from "./outlet/Articles/articles"
import Video from "./outlet/Video/video"
import Home from "./pages/Home/home"


export default function App() {
  const router = createBrowserRouter([{
    path: 'test',
    children: [
      {
        path: 'yosef',
        element: <Yosef />
      }
    ]
  },
  {
    index: true,
    element: <div>good luck!</div>
  }
  ])

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route  element={<Home />}>
          <Route index element={<Dashboard/>} />
          <Route path="editors-view" element={<Editors/>} />
          <Route path="tags-view" element={<Tags/>} />
          <Route path="questions-view" element={<Questions/>} />
          <Route path="articles-view" element={<Articles/>} />
          <Route path="video-view" element={<Video/>} />
        </Route>
      </Routes>
    </div>
  )
}
