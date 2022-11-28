import { GlobalStyle } from "./styles/global"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { CycleContextProvider } from "./context/context"

export function App() {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <CycleContextProvider>
          <Router />
        </CycleContextProvider>
      </BrowserRouter>
    </>
  )
}
