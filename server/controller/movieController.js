const { prisma }= require('../utils/dbConnector');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config()

// ✅ Create Movie
exports.createMovie = async (req, res) => {
  const { name, desc, year, url, genreId,rating } = req.body;

  try {
    const movieData = await prisma.movies.create({
      data: {
        name,
        desc,
        year,
        url,
        genreId,
        rating
      },
      include: { genre: true }
    });

    res.status(201).send({
      message: 'Movie created successfully',
      status: true,
      data: movieData
    });
  } catch (err) {
    res.status(400).send({ message: err.message, status: false });
  }
};

// ✅ Update Movie
exports.updateMovie = async (req, res) => {
  const { id } = req.params;
  const { name, desc, year, url, genreId, rating } = req.body;

  try {
    const movieData = await prisma.movies.update({
      where: { id: id },
      data: {
        name,
        desc,
        year,
        url,
        genreId,
        rating
      },
      include: { genre:{select:{name:true}} }
    });

    res.status(200).send({
      message: 'Movie updated successfully',
      status: true,
      data: movieData
    });
  } catch (err) {
    res.status(400).send({ message: err.message, status: false });
  }
};

// ✅ Delete Movie
exports.deleteMovie = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.movies.delete({ where: { id: id } });
    res.status(200).send({
      message: 'Movie deleted successfully',
      status: true
    });
  } catch (err) {
    res.status(400).send({ message: err.message, status: false });
  }
};

// ✅ Get All Movies
exports.getAllMovies = async (req, res) => {
  try {
    const movies = await prisma.movies.findMany({
      select: {
        id: true,
        name:true,
        genre:true,
        rating:true,
      }
    });

    res.status(200).send({
      status: true,
      data: movies
    });
  } catch (err) {
    res.status(400).send({ message: err.message, status: false });
  }
};

//update movie rating
exports.updateMovieRating = async (req, res) => {
  const { id } = req.params;
  const { rating } = req.body;

  try {
    const movieData = await prisma.movies.update({
      where: { id: id },
      data: { rating: rating },
    });

    res.status(200).send({
      message: 'Movie rating updated successfully',
      status: true,
      data: movieData
    });
  } catch (err) {
    res.status(400).send({ message: err.message, status: false });
  }
};
