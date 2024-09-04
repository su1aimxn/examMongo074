// Import Model
const Books = require('../models/books');
// Function add and export
exports.addBooks = async(req,res) =>{
    const{title,author,published_year,genre,available}=req.body;
    const books = new Books({title,author,published_year,genre,available});
    try{
        const newBooks = await books.save();
        res.status(201).json(newBooks);
    }catch(err){
        res.status(400).json({message:err.message});
    }
};
// Function update and export
exports.updateBooks = async (req, res) => {
    try{
        const { title,author,published_year,genre,available } = req.body;
        
        const updateBooks = await Books.findByIdAndUpdate(
            req.params.id,
            { title,author,published_year,genre,available },
            { new: true }
        );
        if (!updateBooks) return res.status(404).json({ message: 'Not found' });

        res.json(updateBooks);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
// Function delete and export
exports.deleteBooks = async (req,res) => {
    try{
        const books = await Books.findByIdAndDelete(req.params.id);
        if(!books) return res.status(400).json({message:'not found'});
        res.json({message:'Delete succes'});
    }catch(err){
        res.status(500).json({message:err.message});
    }
};

// Function get all data and export
exports.getDataAll = async(req,res) => {
    try {
        const books = await Books.find();
        res.json(books);
    }catch(err){
        res.status(500).json({message:err.message});
    }
};
// Function get data by genre and export
//ตัวยิงapi => http://localhost:3000/api/book?genre=Fantasy

exports.get_genre = async(req,res) => {
    try{
        const {genre} = req.query;
        const books = await Books.findOne({genre});
        if(!books){
            return res.status(404).json({ message: 'Not found' });
        }
        res.json(books);
    }catch(err){
        res.status(500).json({message:err.message});
    }
};