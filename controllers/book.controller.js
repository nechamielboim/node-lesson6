import Books from '../models/book.models.js'

export const getAllBooks = async (req, res, next) => {
    try {
        const books = await Books.find();
        res.json(books); 
    } catch (error) {
        next({ message: error.message });
    } 
};

export const getBookById = async (req, res, next) => {
    try{
        const { id } = req.params;
        const book = await Books.findById(id);
        res.json(book);
    } catch (error) {
        next({ message: error.message });
    } 
   
}

export const addBook = async (req, res, next) => {
    try {
        const { name, price, categories, writer } = req.body;
        const book = new Books({ name, price, categories, writer });
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        next({ message: error.message });
    }
}

export const updateBook = async (req, res, next) => {
    try {
        const pId = req.params.id;
        const { _id, name, price, categories,writer } = req.body;

        if (pId !== _id) {
            return next({ status: 409, message: 'id conflict' });
        }

        const book = await Books.findByIdAndUpdate(pId, {
            $set: { name, price, categories, writer },
        }, { new: true });
        res.status(200).json(book);
    } catch (error) {
        next({ message: error.message });
    }
}

export const deleteBook = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Books.findByIdAndDelete(id);
        res.status(204).end();
    } catch (error) {
        next({ message: error.message });
    }
}
