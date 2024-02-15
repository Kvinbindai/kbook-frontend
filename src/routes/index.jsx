import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Wrapper from "../layouts/Wrapper";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import SearchPage from "../pages/SearchPage";
import BookDetails from "../pages/BookDetailPage";
import NotFound from "../pages/NotFound";



const router = createBrowserRouter([
    {
        path : '/',
        element : (
            <Wrapper/>
        ),
        children : [
            {
                path : '',
                element : <HomePage/>
            },
            {
                path : '/login',
                element :  <LoginPage/>
            },
            {
                path : '/register',
                element : <RegisterPage/>
            },
            {
                path : '/search',
                element : <SearchPage/>
            },
            {
                path : '/book/:bookId',
                element : <BookDetails/>
            },
            {
                path : '*',
                element : <NotFound/>
            }
        ]
    }
])


export default function Router() {
    return <RouterProvider router={router}></RouterProvider>
}