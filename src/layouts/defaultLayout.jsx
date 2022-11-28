import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { LayoutContainer } from "./styles";


export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Navbar />
      <div className="page">
        <Outlet />
      </div>
    </LayoutContainer>
  )
}