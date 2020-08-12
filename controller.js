const pool = require('./db')
const bodyParser = require('body-parser')
const express = require('express')
const { req, res } = require('express')
const { body, validationResult } = require('express-validator');
//const app = express()


const home =  (req, res) => {
    res.json({info:'Hi, Good to go'})
}

//Get all users
const getUsers = (req, res) =>{
    pool.query('select * from users order by id',(error,results) => {
        if(error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}
//Get userById
const getUserById = (req,res) => {
    const id = parseInt(req.params.id)
    pool.query('select * from users where id = $1',[id],(error,results) =>{
        if (error) {
            throw error
        }
         res.status(200).json(results.rows)
    })
}
//Post create user
const createUser = (req,res) => {
    const {name,email} = req.body
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
    pool.query('insert into users(name,email) values ($1,$2) returning *',[name,email],(error,results) => {
        if(error){
            throw error
        }
        res.status(201).json(results.rows)
    })
}

//Put update user
const updateUser = (req,res) => {
    const id = parseInt(req.params.id)
    const {name,email} = req.body
    pool.query('update users set name = $1 , email = $2 where id = $3 returning *',[name,email,id],(error,results) => {
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}
//Delete userById
const deleteUser = (req,res) => {
    const id = parseInt(req.params.id)
    pool.query('delete from users where id = $1 returning *',[id],(error,results) => {
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}
//GET search users
const getUserByName = (req,res) => {
    const key = req.query.key
pool.query('select * from users where name ilike $1',['%'+key+'%'],(error,results) => {
    if(error){
      throw error
    }
    res.status(200).json(results.rows)
  })
  }

module.exports ={
    home,
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUserByName
}