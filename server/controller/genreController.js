const {prisma }= require('../utils/dbConnector');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config()


exports.genreCreate= async (req,res)=>{
    const {name} = req.body
    if (!name || name.trim() === "") {
        return res.status(400).json({ message: "Genre name is required" });
    }

    try{
    const genreData  = await prisma.genre.create({
        data:{
            name:name.trim()
        },
        select: {
        id: true,
        name: true,
      },
    });
    res.status(201).send({message:'created genre',status:true,data:genreData})

    }catch(err){
        if (err.code === 'P2002') 
        {
            return res.status(400).send({
            message: 'Genre name already exists',
            status: false
            });
        }
       res.status(400).send({message:err,status:false})
       console.log(err.message)
    }  
}

exports.getAllGenres = async(req,res) =>{
    try{
        const genres = await prisma.genre.findMany(
            {select:{id:true,name:true}}
        );
        res.status(200).send({message:'Fetched all genres',status:true,data:genres})
    }catch(err){
        res.status(400).send({message:err,status:false})
    }
}

exports.getGenreById = async(req,res) =>{
    const genreId = req.params.id;
    try{
        const genre = await prisma.genre.findUnique({
            where:{id:genreId},
            select:{
                id:true,
                name:true,
                movies:{
                    select:{
                        name:true,
                    }
                }
            }
        });
        if(!genre){
            return res.status(404).send({message:'Genre not found',status:false});
        }
        res.status(200).send({message:'Fetched genre by ID',status:true,data:genre})
    }catch(err){
        res.status(400).send({message:err,status:false})
    }
}

exports.getGenreMovies = async(req,res) =>{
    const genreId = req.params.id;
    try{
        const movies = await prisma.movies.findMany({
            where:{genreId: genreId},
            select:{id:true,name:true}
        });
        if (movies.length === 0)
        {
            return res.status(404).send({ message: "No movies found for this genre", status: false });
        }
        res.status(200).send({message:'Fetched genre movies',status:true,data:movies})
    }catch(err){
        res.status(400).send({message:err,status:false})
    }
}
