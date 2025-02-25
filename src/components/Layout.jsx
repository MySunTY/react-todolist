import { Outlet } from "react-router-dom"
import "./styles/Layout.css"

function Layout() {
  return (
    <div>
        {/* <header>여기는 헤더다</header> */}
        <main className="layout-wrapper">
            <Outlet />
        </main>
        
        {/* <footer>여기는 푸터</footer> */}
    </div>
  )
}

export default Layout