import { Outlet, Route, Routes } from "react-router-dom"
import Week1 from "../pages/Week1.jsx"
import DefaultLayout from "../layout/DefaultLayout"
import Week2 from "../pages/Week2.jsx";

const AppRoutes = () => {
    return (
      <Routes>
        <Route element={<DefaultLayout><Outlet /></DefaultLayout> }>
          <Route index element={<Week1/>} path="/"/>
          <Route element={<Week2/>} path="/week2"/>
        </Route>
      </Routes>
    )
  }
  export default AppRoutes