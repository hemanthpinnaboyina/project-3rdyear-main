const express = require('express')
const router = express.Router()
const authController = require('../controller/authController')
const adminController = require('../controller/adminController')
const authenticateMiddleware = require('../middleware/authenticateMiddleware');
const {verifyAdmin} = authenticateMiddleware;
const {adminLogin,adminRegister,adminChangePass} = authController;
const {getAllUsers} = adminController;
const {genreCreate,updateGenre,getGenreById} = require('../controller/genreController');
const { createMovie } = require('../controller/movieController');

router.post('/register',adminRegister);
router.post('/login',adminLogin); //middleware passed
router.get('/allUsers',verifyAdmin,getAllUsers);
router.post('/addMovie',verifyAdmin,createMovie);
router.post('/createGenre',verifyAdmin,genreCreate);
router.get('/viewGenre/:id',verifyAdmin,getGenreById);
router.put('/updateGenre/:id',verifyAdmin,updateGenre);
router.put('/changePass/:id',verifyAdmin,adminChangePass);
router.get('/viewMovies',verifyAdmin,(req,res)=>{res.send(201)});
router.patch('/updateMovies',verifyAdmin,(req,res)=>{res.send(201)});

module.exports = router;