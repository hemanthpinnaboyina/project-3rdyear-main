const express = require('express')
const router = express.Router()
const authController = require('../controller/authController')
const {userRegister,userLogin,adminChangePass} = authController;
const {getAllGenres,getGenreById,getGenreMovies} = require('../controller/genreController');
const {getAllMovies} = require('../controller/movieController');

router.post('/register',userRegister);
router.post('/login',userLogin);
router.put('/changePass/:id',adminChangePass);
router.get('/viewAllGenres',getAllGenres);
router.get('/viewGenre/:id',getGenreById);
router.get('/:id/movies',getGenreMovies);
router.get('/viewAllMovies',getAllMovies);
router.get('/search',(req,res)=>{res.send(201)})

module.exports = router;