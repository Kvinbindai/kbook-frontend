import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Wrapper from "../layouts/Wrapper";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import SearchPage from "../pages/SearchPage";
import BookDetailPage from "../pages/BookDetailPage";
import NotFound from "../pages/NotFound";
import AddEditBookDetailPage from "../pages/AddEditBookDetailPage";
import CartPage from "../pages/CartPage";
import EditProfile from "../pages/EditProfile";
import DashboardTablePage from "../pages/DashboardTablePage";
import TransactionDetailPage from "../pages/TransactionDetailPage";
import AddressPage from "../pages/AddressPage";
import PaymentPage from "../pages/PaymentPage";
import WrapperNoFooter from "../layouts/WrapperNoFooter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/book/:bookId",
        element: <BookDetailPage />,
        // element : <AddEditBookDetailPage/>
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/profile/:userId",
        element: <EditProfile />,
      },
      {
        path: "/profile/history",
        element: <DashboardTablePage />,
      },
      {
        path: "/profile/history/:transactionId",
        element: <TransactionDetailPage />,
      },
      {
        path: "/cart/address",
        element: <AddressPage />,
      },
      {
        path: "/cart/address/payment",
        element: <PaymentPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <WrapperNoFooter />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
