const express = require('express')
const router = express.Router()
const authController = require('../controller/authController')
const adminController = require('../controller/adminController')
const authenticateMiddleware = require('../middleware/authenticateMiddleware');
const {verifyAdmin} = authenticateMiddleware;
const {adminLogin,adminRegister,adminChangePass} = authController;
const {getAllUsers} = adminController;
const {genreCreate,getGenreById,getAllGenres} = require('../controller/genreController');
const { createMovie,updateMovie,deleteMovie,updateMovieRating } = require('../controller/movieController');

router.post('/register',adminRegister);
router.post('/login',adminLogin); //middleware passed
router.get('/allUsers',verifyAdmin,getAllUsers);
router.put('/changePass/:id',adminChangePass);
router.post('/createGenre',verifyAdmin,genreCreate);
router.get('/viewAllGenres',getAllGenres);
router.post('/addMovie',verifyAdmin,createMovie);
router.post('/updateMovie/:id',verifyAdmin,updateMovie);
router.delete('/deleteMovie/:id',verifyAdmin,deleteMovie);
router.put('/rating/:id',verifyAdmin,updateMovieRating)

module.exports = router;