import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Purchase } from "./pages/Purchase";
import { DefaultLayout } from './layouts/defaultLayout'
import { Delivery } from "./pages/Delivery";

export function Router() {

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/purchase/success" element={<Delivery />} />
      </Route>
    </Routes>
  )
}