const express = require('express')
const router = express.Router()
const authController = require('../controller/authController')
const {userRegister,userLogin} = authController;
const {getAllGenres,getGenreById,getGenreMovies} = require('../controller/genreController');

router.post('/register',userRegister);
router.post('/login',userLogin);
router.get('/viewAllMovies',(req,res)=>{res.send(201)})
router.get('/viewAllGenre',getAllGenres);
router.get('/viewGenre/:id',getGenreById);
router.get('/movies/:genre',getGenreMovies);
router.post('/rating',(req,res)=>{res.send(201)})
router.get('/search',(req,res)=>{res.send(201)})

module.exports = router;