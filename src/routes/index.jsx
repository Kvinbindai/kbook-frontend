import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Wrapper from "../layouts/Wrapper";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AllBookPage from "../pages/AllBookPage";
import BookDetailPage from "../pages/BookDetailPage";
import NotFound from "../pages/NotFound";
import EditBookPage from "../pages/EditBookPage";
import CartPage from "../pages/CartPage";
import EditProfile from "../pages/EditProfile";
import DashboardTableBookPage from "../pages/DashboardTableBookPage";
import HistoryDetailPage from "../pages/HistoryDetailPage";
import AddressPage from "../pages/AddressPage";
import PaymentPage from "../pages/PaymentPage";
import WrapperNoFooter from "../layouts/WrapperNoFooter";
import ProtectRouteForAdmin from "./ProtectRouteForAdmin";
import { DashboardContextProvider } from "../contexts/DashboardContext";
import AddCategoryPage from "../pages/AddCategoryPage";
import EditCategoryPage from "../pages/EditCategoryPage";
import RouteForUserLogin from "./RouteForUserLogin";
import ProtectPageWhenLogin from "./ProtectPageWhenLogin";
import RedirectWhenAdminLogin from "./RedirectWhenAdminLogin";
import HistoryPage from "../pages/HistoryPage";
import AddBookDetailPage from '../pages/AddBookPage'
import DashboardTableCategoryPage from '../pages/DashboardTableCategoryPage'
import EditTransactionPage from '../pages/EditTransactionPage'
import DashboardTableTransactionPage from '../pages/DashboardTableTransactionPage'
import SearchPage from "../pages/SearchPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RedirectWhenAdminLogin>
        <Wrapper />
      </RedirectWhenAdminLogin>
    ),
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: (
          <ProtectPageWhenLogin>
            <LoginPage />
          </ProtectPageWhenLogin>
        ),
      },
      {
        path: "/register",
        element: (
          <ProtectPageWhenLogin>
            <RegisterPage />
          </ProtectPageWhenLogin>
        ),
      },
      {
        path: "/books",
        element: <AllBookPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/book/:bookId",
        element: <BookDetailPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/cart",
        element: (
          <RouteForUserLogin>
            <CartPage />
          </RouteForUserLogin>
        ),
      },
      {
        path: "/profile/edit",
        element: (
          <RouteForUserLogin>
            <EditProfile />
          </RouteForUserLogin>
        ),
      },
      {
        path: "/profile/history",
        element: (
          <RouteForUserLogin>
            <HistoryPage />
          </RouteForUserLogin>
        ),
      },
      {
        path: "/profile/history/:transactionId",
        element: (
          <RouteForUserLogin>
            <HistoryDetailPage />
          </RouteForUserLogin>
        ),
      },
      {
        path: "/cart/address",
        element: (
          <RouteForUserLogin>
            <AddressPage />
          </RouteForUserLogin>
        ),
      },
      {
        path: "/cart/address/payment",
        element: (
          <RouteForUserLogin>
            <PaymentPage />
          </RouteForUserLogin>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectRouteForAdmin>
        <DashboardContextProvider>
          <WrapperNoFooter />
        </DashboardContextProvider>
      </ProtectRouteForAdmin>
    ),
    children: [
      {
        path: "books",
        element: <DashboardTableBookPage></DashboardTableBookPage>,
      },
      {
        path: "books/add",
        element: <AddBookDetailPage />,
      },
      {
        path: "books/:bookId",
        element: <EditBookPage />,
      },
      {
        path: "category",
        element: <DashboardTableCategoryPage />,
      },
      {
        path: "category/add",
        element: <AddCategoryPage />,
      },
      {
        path: "category/:categoryId",
        element: <EditCategoryPage />,
      },
      {
        path: "transactions",
        element: <DashboardTableTransactionPage />,
      },
      {
        path: "transactions/:transactionId",
        element: <EditTransactionPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
