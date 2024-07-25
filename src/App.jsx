import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Yosef from "./tests/Yosef"
import Rubinstein from "./tests/Rubinstein"


export default function App() {
  const router = createBrowserRouter([{
    path: 'test',
    children: [
      {
        path: 'yosef',
        element: <Yosef />
      },
      {
        path: 'rubinstein',
        element: <Rubinstein/>
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
