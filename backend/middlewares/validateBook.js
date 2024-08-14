const validateBook = (req, res, next) => {
    const { title, author, publishYear } = req.body;
  
    if (!title || typeof title !== "string") {
      return res.status(400).send({ message: "Invalid or missing title" });
    }
    if (!author || typeof author !== "string") {
      return res.status(400).send({ message: "Invalid or missing author" });
    }
    if (!publishYear || typeof publishYear !== "number") {
      return res.status(400).send({ message: "Invalid or missing publish year" });
    }
  
    next();
  };
  
  export default validateBook;
  