import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import MainPage from './pages/MainPage.jsx'
import TodoAddPage from './pages/TodoAddPage.jsx'
import TodoDetailPage from './pages/TodoDetailPage.jsx'
import "./index.css"

const router= createBrowserRouter([
  {path : "/", element: <Layout />, children:[
    {path: "/", element:<MainPage />},
    {path: "/add", element:<TodoAddPage />},
    {path: "/detail", element:<TodoDetailPage />},

  ]}
  // {path:"/", element: <h2>여기는 메인페이지</h2> },
  // {path:"/add", element: <h2>여기는 생성페이지</h2>},
  // {path:"/detail", element: <h2>여기는 상세페이지</h2>},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
