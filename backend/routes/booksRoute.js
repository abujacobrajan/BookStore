import express from "express";
import validateBook from "../middlewares/validateBook.js";
import {
  createBook,
  getAllBooks,
  getOneBook,
  updateBook,
  deleteBook,
} from "../controllers/bookController.js";

const router = express.Router();

// Route to save a new book to the database
router.post("/", validateBook, createBook);

// Route to get all books from the database
router.get("/", getAllBooks);

// Route to get a single book by ID
router.get("/:id", getOneBook);

// Route to update a book by ID
router.put("/:id", validateBook, updateBook);

// Route to delete a book by ID
router.delete("/:id", deleteBook);

export default router;
