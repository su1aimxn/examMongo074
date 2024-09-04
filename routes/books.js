const express = require("express");
const router = express.Router();

// Import Controller
const {addBooks,updateBooks,deleteBooks,getDataAll,get_genre}
=require('../controllers/bookController')
// APIs Routing Config
router.post('/books/',addBooks);
router.put('/books/:id',updateBooks);
router.delete('/books/:id',deleteBooks);
router.get('/books/',getDataAll);
router.get('/book',get_genre);  //ตัวยิงapi => http://localhost:3000/api/book?genre=Fantasy
// Export router
module.exports=router;