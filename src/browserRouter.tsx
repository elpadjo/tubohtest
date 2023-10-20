import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "./App"

const browserRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}></Route>
    )
)

export default browserRouter