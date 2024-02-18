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
import ProtectRouteForAdmin from "./ProtectRouteForAdmin";
import { DashboardContextProvider } from "../contexts/DashboardContext";
import AddEditCategoryPage from "../pages/AddEditCategoryPage";
import AddEditTransactionPage from "../pages/AddEditTransactionPage";
import RouteForUserLogin from "./RouteForUserLogin";
import ProtectPageWhenLogin from "./ProtectPageWhenLogin";
import RedirectWhenAdminLogin from "./RedirectWhenAdminLogin";
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
        path: "/profile/:userId",
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
            <DashboardTablePage />
          </RouteForUserLogin>
        ),
      },
      {
        path: "/profile/history/:transactionId",
        element: (
          <RouteForUserLogin>
            <TransactionDetailPage />
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
        element: <DashboardTablePage></DashboardTablePage>,
      },
      {
        path: "books/add",
        element: <AddEditBookDetailPage />,
      },
      {
        path: "books/:bookId",
        element: <AddEditBookDetailPage />,
      },
      {
        path: "category",
        element: <DashboardTablePage />,
      },
      {
        path: "category/add",
        element: <AddEditCategoryPage />,
      },
      {
        path: "category/:categoryId",
        element: <AddEditCategoryPage />,
      },
      {
        path: "transactions",
        element: <DashboardTablePage />,
      },
      {
        path: "transactions/add",
        element: <AddEditTransactionPage />,
      },
      {
        path: "transactions/:transactionId",
        element: <AddEditTransactionPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
