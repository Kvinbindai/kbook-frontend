import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  getAllBookList,
  getAllCategoryList,
  getAllTransactionList,
} from "../api/dashboard";
import {
  booksHeader,
  categoryHeader,
  transactionsHeader,
} from "../constant/table";
import { updateTransactionStatus} from '../api/transaction'
import { createBook, updateBook } from "../api/book";
import { editCategory, addCategory } from "../api/category";
const DashboardContext = createContext();

const DashboardContextProvider = ({ children }) => {
  const [currentPath, setCurrenPath] = useState("books");
  const [tableHeader, setTableHeader] = useState([]);
  const [navButton, setNavButton] = useState("");
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

  const [categoryData, setCategoryData] = useState(null);
  const [bookData, setBookData] = useState(null);
  const [transactionData, setTransactionData] = useState(null);

  const getData = async () => {
    const book = await getAllBookList();
    setBookData(book.data.data);
    const category = await getAllCategoryList();
    setCategoryData(category.data.data);
    const transaction = await getAllTransactionList();
    setTransactionData(transaction.data.data);
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
    setHeader(currentPath);
    setButton(currentPath);
  }, [currentPath]);

  const handleLink = (path) => {
    setCurrenPath(path);
  };

  const createNewBook = async (formData) => {
    const data = await createBook(formData);
    // console.log(data.data.allList)
    getData();
  };

  const updateOldBook = async (formData, bookId) => {
    await updateBook(formData, bookId);
    getData();
  };


  const addNewCategory = async (obj) => {
    await addCategory(obj)
    getData()
  }

  const editOldCategory = async(obj,categoryId) => {
    await editCategory(obj,categoryId)
    getData()
  }

  const editUserTransaction = async (transactionId,details) => {
    await updateTransactionStatus(transactionId,details)
    getData()
  }


  return (
    <DashboardContext.Provider
      value={{
        getData,
        addNewCategory,
        editOldCategory,
        editUserTransaction,
        createNewBook,
        updateOldBook,
        currentPath,
        setCurrenPath,
        navListForAdmin,
        handleLink,
        tableHeader,
        navButton,
        categoryData,
        transactionData,
        bookData,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export { DashboardContext, DashboardContextProvider };
