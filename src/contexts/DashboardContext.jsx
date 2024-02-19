import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { getAllList } from "../api/dashboard";
import {
  booksHeader,
  categoryHeader,
  transactionsHeader,
} from "../constant/table";
import useAuth from "../hooks/use-auth";
const DashboardContext = createContext();

const DashboardContextProvider = ({ children }) => {

  const [currentPath, setCurrenPath] = useState("books");
  const [tableHeader, setTableHeader] = useState([]);
  const [navButton, setNavButton] = useState("");
  const [data, setData] = useState([]);
  const navListForAdmin = [
    {
      id: 1,
      title: "BOOKLIST",
      path: "books",
    },
    {
      id: 2,
      title: "CATEGORY",
      path: "category",
    },
    {
      id: 3,
      title: "TRANSACTIONS",
      path: "transactions",
    },
  ];

  const getData = async (path) => {
    const res = await getAllList(path);
    setData(res.data.data);
  };

  const setHeader = (path) => {
    switch (path) {
      case "books":
        setTableHeader(booksHeader);
        break;
      case "category":
        setTableHeader(categoryHeader);
        break;
      case "transactions":
        setTableHeader(transactionsHeader);
        break;
      default:
        setTableHeader(booksHeader);
    }
  };

  const setButton = (path) => {
    switch (path) {
      case "books":
        setNavButton("Add Book");
        break;
      case "category":
        setNavButton("Add Category");
        break;
      case "transactions":
        setNavButton("Edit Transaction");
        break;
      default:
        setNavButton("Add Book");
    }
  };


  useEffect(() => {
    getData(currentPath);
    setHeader(currentPath);
    setButton(currentPath);
  }, [currentPath]);

  const handleLink = (path) => {
    setCurrenPath(path);
  };

  return (
    <DashboardContext.Provider
      value={{
        currentPath,
        setCurrenPath,
        navListForAdmin,
        handleLink,
        data,
        tableHeader,
        navButton
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export { DashboardContext, DashboardContextProvider };
