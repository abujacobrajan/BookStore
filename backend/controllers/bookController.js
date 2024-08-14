
import { Book } from "../models/bookModel.js";


export const createBook = async (req, res) => {
  try {
      const newBook = {
        title: req.body.title,
        author: req.body.author,
        publishYear: Number(req.body.publishYear),
      };
      const book = await Book.create(newBook);
      return res.status(201).send({ message: "Book successfully added", book });
   
  } catch (error) {
    console.log("Error creating book:", error.message);
    res.status(500).send({ message: error.message });
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).send(books);
  } catch(error) {
    console.log("Error fetching books:", error.message);
    res.status(500).send({ message: error.message });
  }
};

// Get a single book by ID

export const getOneBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).send({ message: "Book not found" });
    }

    res.status(200).send(book);
  } catch(error) {
    console.log("Error fetching book:", error.message);
    res.status(500).send({ message: error.message });
  }
};

// Update a book by ID
export const updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findByIdAndUpdate(id, req.body);

    if (!book) {
      res.status(404).send({ message: "Book not found" });
    } else {
      res.status(200).send({ message: "Book updated successfully" });
    }

  } catch (error){
    console.log("Error updating book:", error.message);
    res.status(500).send({ message: error.message });
  }
};


// Delete a book by ID

export const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findByIdAndDelete(id);

    if (!book) {
      return res.status(404).send({ message: "Book not found" });
    }
    
    res.status(200).send({ message: "Book Deleted successfully" });

  } catch (error) {
    console.log("Error deleting book:", error.message);
    res.status(500).send({ message: error.message });
  }
};
