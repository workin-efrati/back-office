import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Yosef from "./tests/Yosef"


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
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
